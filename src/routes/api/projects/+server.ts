import { error, json } from '@sveltejs/kit';
import { getRepos } from '$lib/server/github';
import { ADMIN_API_KEY } from '$env/static/private';
import clientPromise from '$lib/server/db';
import { getRepositoriesCol } from '$lib/models/repositories';
import type { RequestHandler } from './$types';

export const PATCH = (async ({ request }) => {
	if (request.headers.get('admin-api-key') !== ADMIN_API_KEY) {
		throw error(401, 'Unauthorized');
	}

	const ownerRepos = await getRepos('owner');
	const memberRepos = await getRepos('member');

	const client = await clientPromise;
	await getRepositoriesCol(client).bulkWrite(
		[...ownerRepos, ...memberRepos].map((repo) => ({
			updateOne: {
				filter: { name: repo.full_name },
				update: {
					$set: {
						name: repo.full_name,
						url: repo.html_url,
						language: repo.language,
						visibility: repo.visibility,
						license: repo.license
							? {
									key: repo.license.key,
									name: repo.license.name,
									url: repo.license.url
							  }
							: null,
						pushedAt: new Date(repo.pushed_at)
					}
				},
				upsert: true
			}
		}))
	);

	return json({ success: true });
}) satisfies RequestHandler;

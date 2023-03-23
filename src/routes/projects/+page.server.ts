import { getProjectsCol, serializeProject } from '$lib/models/projects';
import clientPromise from '$lib/server/db';
import { getRepos, type Repo } from '$lib/server/github';
import dayjs from 'dayjs';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const client = await clientPromise;

	const projects = (
		await getProjectsCol(client)
			.find({ repo: { $exists: true } })
			.toArray()
	).map(serializeProject);

	const reposList = await getRepos();
	const repos = reposList.reduce((acc: { [key: string]: Repo }, repo) => {
		acc[repo.full_name] = repo;
		return acc;
	}, {});

	return {
		props: {
			projects: projects
				.map((project) => ({
					...project,
					repoInfo: project.repo ? repos[project.repo] : null
				}))
				.sort((a, b) => {
					if (a.repoInfo && b.repoInfo) {
						return dayjs(b.repoInfo.pushed_at).valueOf() - dayjs(a.repoInfo.pushed_at).valueOf();
					}

					return 0;
				})
		}
	};
}) satisfies PageServerLoad;

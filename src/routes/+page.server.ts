import { error } from '@sveltejs/kit';
import { getProjectsCol, ProjectStatus, serializeProject } from '$lib/models/projects';
import clientPromise from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const client = await clientPromise;

	const projects = getProjectsCol(client)
		.find({ status: ProjectStatus.ONGOING })
		.sort({ from: -1 })
		.toArray()
		.then((projects) => projects.map(serializeProject))
		.catch((err) => {
			console.error(err);
			throw error(500, 'failed to read projects');
		});

	return {
		projects: { streamed: projects }
	};
}) satisfies PageServerLoad;

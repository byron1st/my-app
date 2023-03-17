import { getProjectsCol, serializeProject, sortProjects } from '$lib/models/projects';
import clientPromise from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const client = await clientPromise;

	const projects = (await getProjectsCol(client).find({ isPersonal: true }).toArray())
		.map(serializeProject)
		.sort(sortProjects);

	return {
		props: { projects }
	};
}) satisfies PageServerLoad;

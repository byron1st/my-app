import { getProjectsCol, ProjectStatus, serializeProject } from '$lib/models/projects';
import clientPromise from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const client = await clientPromise;

	const projects = (
		await getProjectsCol(client)
			.find({ status: ProjectStatus.ONGOING })
			.sort({ from: -1 })
			.toArray()
	).map(serializeProject);

	return { projects };
}) satisfies PageServerLoad;

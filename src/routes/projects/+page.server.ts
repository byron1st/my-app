import { readProjectsWithSkillsRepos, serializeProjectWithSkillRepo } from '$lib/models/projects';
import clientPromise from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const client = await clientPromise;

	const projects = readProjectsWithSkillsRepos(client).then((result) =>
		result.map(serializeProjectWithSkillRepo)
	);

	return {
		projects: { streamed: projects }
	};
}) satisfies PageServerLoad;

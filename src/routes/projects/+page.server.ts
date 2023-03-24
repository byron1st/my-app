import { readProjectsWithSkillsRepos, serializeProjectWithSkillRepo } from '$lib/models/projects';
import clientPromise from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const client = await clientPromise;

	const projects = (await readProjectsWithSkillsRepos(client)).map(serializeProjectWithSkillRepo);

	return {
		props: { projects }
	};
}) satisfies PageServerLoad;

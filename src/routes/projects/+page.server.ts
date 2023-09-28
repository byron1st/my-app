import { readProjectsWithSkills, serializeProjectWithSkill } from '$lib/models/projects';
import clientPromise from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const client = await clientPromise;

	const projects = readProjectsWithSkills(client).then((result) =>
		result.map(serializeProjectWithSkill)
	);

	return {
		projects: { streamed: projects }
	};
}) satisfies PageServerLoad;

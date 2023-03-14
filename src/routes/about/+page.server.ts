import { getSkillsCol, serializeSkill } from '$lib/models/skills';
import clientPromise from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const client = await clientPromise;

	const skills = (await getSkillsCol(client).find({}).sort({ level: -1 }).toArray()).map(
		serializeSkill
	);

	return {
		props: { skills }
	};
}) satisfies PageServerLoad;

import { getLecturesCol } from '$lib/models/lectures';
import { getSkillsCol, serializeSkill } from '$lib/models/skills';
import clientPromise from '$lib/server/db';
import { serializeId } from '$lib/server/dbutils';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const client = await clientPromise;

	const [skills, lectures] = await Promise.all([
		getSkillsCol(client).find({}).sort({ level: -1 }).toArray(),
		getLecturesCol(client).find({}).sort({ to: -1 }).toArray()
	]);

	return {
		props: {
			skills: skills.map(serializeSkill),
			lectures: lectures.map(serializeId)
		}
	};
}) satisfies PageServerLoad;

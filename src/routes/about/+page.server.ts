import { error } from '@sveltejs/kit';
import { getLecturesCol } from '$lib/models/lectures';
import { getSkillsCol, serializeSkill } from '$lib/models/skills';
import clientPromise from '$lib/server/db';
import { serializeId } from '$lib/server/dbutils';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const client = await clientPromise;

	const skills = getSkillsCol(client)
		.find({})
		.sort({ level: -1 })
		.toArray()
		.then((result) => result.map(serializeSkill))
		.catch((err) => {
			console.error(err);
			throw error(500, 'failed to read skills');
		});

	const lectures = getLecturesCol(client)
		.find({})
		.sort({ to: -1 })
		.toArray()
		.then((result) => result.map(serializeId))
		.catch((err) => {
			console.error(err);
			throw error(500, 'failed to read skills');
		});

	return {
		skills: { streamed: skills },
		lectures: { streamed: lectures }
	};
}) satisfies PageServerLoad;

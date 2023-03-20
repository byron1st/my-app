import { getLecturesCol } from '$lib/models/lectures';
import {
	getProjectsCol,
	serializeProjectWithSkill,
	sortProjects,
	type ProjectWithSkillsWithId
} from '$lib/models/projects';
import { getSkillsCol, serializeSkill } from '$lib/models/skills';
import clientPromise from '$lib/server/db';
import { serializeId } from '$lib/server/dbutils';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const client = await clientPromise;

	const skills = (await getSkillsCol(client).find({}).sort({ level: -1 }).toArray()).map(
		serializeSkill
	);

	const projects = (
		await getProjectsCol(client)
			.aggregate<ProjectWithSkillsWithId>([
				{ $match: { isPersonal: false } },
				{ $sort: { status: 1, to: -1, from: -1 } },
				{
					$lookup: {
						from: 'skills',
						localField: 'skillIds',
						foreignField: '_id',
						pipeline: [{ $project: { skill: 1, level: 1 } }],
						as: 'skills'
					}
				}
			])
			.toArray()
	).map(serializeProjectWithSkill);

	const lectures = (await getLecturesCol(client).find({}).sort({ to: -1 }).toArray()).map(
		serializeId
	);

	return {
		props: { skills, projects, lectures }
	};
}) satisfies PageServerLoad;

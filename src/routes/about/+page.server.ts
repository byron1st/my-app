import {
	getProjectsCol,
	serializeProject,
	type ProjectSerialized,
	type ProjectWithSkillsWithId
} from '$lib/models/projects';
import { getSkillsCol, serializeSkill } from '$lib/models/skills';
import clientPromise from '$lib/server/db';
import type { MongoClient } from 'mongodb';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const client = await clientPromise;

	const skills = (await getSkillsCol(client).find({}).sort({ level: -1 }).toArray()).map(
		serializeSkill
	);

	const currentProjects = await readProjectsWithSkills(false, client);
	const projects = await readProjectsWithSkills(true, client);

	return {
		props: { skills, projects: [...currentProjects, ...projects] }
	};
}) satisfies PageServerLoad;

async function readProjectsWithSkills(
	isFinishedProject: boolean,
	client: MongoClient
): Promise<ProjectSerialized[]> {
	return (
		await getProjectsCol(client)
			.aggregate<ProjectWithSkillsWithId>([
				{ $match: { to: { $exists: isFinishedProject } } },
				{ $sort: { isPersonal: 1 } },
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
	).map(serializeProject);
}

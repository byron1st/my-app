import { getProjectsCol, serializeProject } from '$lib/models/projects';
import { getSkillsCol, serializeSkill } from '$lib/models/skills';
import clientPromise from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const client = await clientPromise;

	const skills = (await getSkillsCol(client).find({}).sort({ level: -1 }).toArray()).map(
		serializeSkill
	);

	const currentProjects = (
		await getProjectsCol(client)
			.find({ to: { $exists: false } })
			.sort({ isPersonal: 1 })
			.toArray()
	).map(serializeProject);

	const projects = (
		await getProjectsCol(client)
			.find({ to: { $exists: true } })
			.sort({ to: -1, isPersonal: 1 })
			.toArray()
	).map(serializeProject);

	return {
		props: { skills, projects: [...currentProjects, ...projects] }
	};
}) satisfies PageServerLoad;

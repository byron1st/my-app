import { getPersonalInfoCol } from '$lib/models/personalinfo';
import { getProjectsCol, ProjectStatus, serializeProject } from '$lib/models/projects';
import clientPromise from '$lib/server/db';
import { serializeId } from '$lib/server/dbutils';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const client = await clientPromise;

	const [projects, personalInfo] = await Promise.all([
		await getProjectsCol(client)
			.find({ status: ProjectStatus.ONGOING })
			.sort({ from: -1 })
			.toArray(),
		await getPersonalInfoCol(client).find({}).toArray()
	]);

	return {
		props: {
			projects: projects.map(serializeProject),
			personalInfo: personalInfo.map(serializeId)[0]
		}
	};
}) satisfies PageServerLoad;

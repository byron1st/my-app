import { readProjectWithSkillsRepos, serializeProjectWithSkillRepo } from '$lib/models/projects';
import clientPromise from '$lib/server/db';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { ObjectId } from 'mongodb';
import { readProjectContent, serializeProjectContent } from '$lib/models/projectcontents';

export const load = (async ({ params }) => {
	const client = await clientPromise;
	const projectID = new ObjectId(params.projectID);

	const project = await readProjectWithSkillsRepos(client, projectID);
	if (project === null) throw error(404, { message: 'Not Found' });

	const content = await readProjectContent(client, projectID);

	return {
		project: serializeProjectWithSkillRepo(project),
		content: content !== null ? serializeProjectContent(content) : null
	};
}) satisfies PageServerLoad;

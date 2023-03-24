import { getProjectsCol, serializeProject } from '$lib/models/projects';
import clientPromise from '$lib/server/db';
import { getRepos, type Repo } from '$lib/server/github';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const client = await clientPromise;

	const projects = (await getProjectsCol(client).find({}).toArray()).map(serializeProject);

	const reposList = await getRepos();
	const repos = reposList.reduce((acc: { [key: string]: Repo }, repo) => {
		acc[repo.full_name] = repo;
		return acc;
	}, {});

	return {
		props: {
			projects: projects.map((project) => ({
				...project,
				repoInfo: project.repos ? project.repos.map((repo) => repos[repo]) : null
			}))
			// TODO: Sort 방법 찾기
		}
	};
}) satisfies PageServerLoad;

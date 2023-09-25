import type { RepositoryType } from '$lib/models/repositories';
import type { MongoClient, ObjectId, WithId } from 'mongodb';

const projectsCol = 'projects';

export enum ProjectStatus {
	ONGOING = 1,
	HOLD,
	FINISHED
}

export enum ProjectKind {
	WORK = 1,
	PERSONAL,
	EDUCATION
}

export type ProjectType = {
	name: string;
	role: string;
	team: string;
	from: Date;
	to?: Date;
	overview: string;
	description: string;
	link?: string;
	skillIds: ObjectId[];
	tags: string[];
	size: number; // LOC
	kind: ProjectKind;
	status: ProjectStatus;
	repos?: string[];
};

export function getProjectsCol(client: MongoClient) {
	return client.db().collection<ProjectType>(projectsCol);
}

export type ProjectSerialized = Omit<ProjectType, 'skillIds'> & {
	_id: string;
	skillIds: string[];
};

export function serializeProject(project: WithId<ProjectType>): ProjectSerialized {
	return {
		...project,
		_id: project._id.toString(),
		skillIds: project.skillIds.map((id) => id.toString())
	};
}

export async function readProjectsWithSkillsRepos(client: MongoClient) {
	return await getProjectsCol(client)
		.aggregate<ProjectWithSkillRepoWithId>([
			{ $sort: { status: 1, to: -1, from: -1 } },
			{
				$lookup: {
					from: 'skills',
					localField: 'skillIds',
					foreignField: '_id',
					pipeline: [{ $project: { skill: 1, level: 1 } }],
					as: 'skills'
				}
			},
			{
				$lookup: {
					from: 'repositories',
					localField: 'repos',
					foreignField: 'name',
					pipeline: [{ $project: { _id: 0 } }],
					as: 'repoInfo'
				}
			}
		])
		.toArray();
}

export async function readProjectWithSkillsRepos(client: MongoClient, projectID: ObjectId) {
	const projects = await getProjectsCol(client)
		.aggregate<ProjectWithSkillRepoWithId>([
			{ $match: { _id: projectID } },
			{
				$lookup: {
					from: 'skills',
					localField: 'skillIds',
					foreignField: '_id',
					pipeline: [{ $project: { skill: 1, level: 1 } }],
					as: 'skills'
				}
			},
			{
				$lookup: {
					from: 'repositories',
					localField: 'repos',
					foreignField: 'name',
					pipeline: [{ $project: { _id: 0 } }],
					as: 'repoInfo'
				}
			}
		])
		.toArray();

	return projects.length === 0 ? null : projects[0];
}

type ProjectedSkill = { skill: string; level: number };

export type ProjectWithSkillSerialized = Omit<ProjectType, 'skillIds'> & {
	_id: string;
	skillIds: string[];
	skills: (ProjectedSkill & { _id: string })[];
};

export type ProjectWithSkillRepoSerialized = Omit<ProjectType, 'skillIds'> & {
	_id: string;
	skillIds: string[];
	skills: (ProjectedSkill & { _id: string })[];
	repoInfo: RepositoryType[];
};

export type ProjectWithSkillRepoWithId = WithId<ProjectType> & {
	skills: WithId<ProjectedSkill>[];
	repoInfo: RepositoryType[];
};

export function serializeProjectWithSkillRepo(
	project: ProjectWithSkillRepoWithId
): ProjectWithSkillRepoSerialized {
	return {
		...project,
		_id: project._id.toString(),
		skillIds: project.skillIds.map((id) => id.toString()),
		skills: project.skills.map((skill) => ({ ...skill, _id: skill._id.toString() }))
	};
}

import type { MongoClient, ObjectId, WithId } from 'mongodb';
import { serializeSkill, type SkillSerialized, type SkillType } from '$lib/models/skills';

const projectsCol = 'projects';

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
	isPersonal: boolean;
	size: number;
};

export function getProjectsCol(client: MongoClient) {
	return client.db().collection<ProjectType>(projectsCol);
}

type ProjectedSkill = { skill: string; level: number };

export type ProjectSerialized = Omit<ProjectType, 'skillIds'> & {
	_id: string;
	skillIds: string[];
	skills: (ProjectedSkill & { _id: string })[];
};

export type ProjectWithSkillsWithId = WithId<ProjectType> & {
	skills: WithId<ProjectedSkill>[];
};

export function serializeProject(project: ProjectWithSkillsWithId): ProjectSerialized {
	return {
		...project,
		_id: project._id.toString(),
		skillIds: project.skillIds.map((id) => id.toString()),
		skills: project.skills.map((skill) => ({ ...skill, _id: skill._id.toString() }))
	};
}

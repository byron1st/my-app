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

type ProjectedSkill = { skill: string; level: number };

export type ProjectWithSkillSerialized = Omit<ProjectType, 'skillIds'> & {
	_id: string;
	skillIds: string[];
	skills: (ProjectedSkill & { _id: string })[];
};

export type ProjectWithSkillsWithId = WithId<ProjectType> & {
	skills: WithId<ProjectedSkill>[];
};

export function serializeProjectWithSkill(
	project: ProjectWithSkillsWithId
): ProjectWithSkillSerialized {
	return {
		...project,
		_id: project._id.toString(),
		skillIds: project.skillIds.map((id) => id.toString()),
		skills: project.skills.map((skill) => ({ ...skill, _id: skill._id.toString() }))
	};
}

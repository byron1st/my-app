import type { MongoClient, ObjectId, WithId } from 'mongodb';

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

export function sortProjects(prev: ProjectSerialized, next: ProjectSerialized): number {
	if (!prev.to && !next.to) return prev.from < next.from ? 1 : -1;
	else if (!prev.to) return -1;
	else if (!next.to) return 1;

	return prev.to < next.to ? 1 : -1;
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

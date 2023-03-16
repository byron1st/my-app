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

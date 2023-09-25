import type { MongoClient, ObjectId, WithId } from 'mongodb';

const projectContentsCol = 'projectcontents';

export type ProjectContentType = {
	projectId: ObjectId;
	overview: string;
	challenges: Challenge[];
	techstacks: TechstackThought[];
};

export type Challenge = {
	title: string;
	challenge: string;
	solution: string;
};

export type TechstackThought = {
	techstack: string;
	thought: string;
};

export function getProjectContentsCol(client: MongoClient) {
	return client.db().collection<ProjectContentType>(projectContentsCol);
}

export type ProjectContentSerialized = Omit<ProjectContentType, 'projectId'> & {
	_id: string;
	projectId: string;
};

export function serializeProjectContent(
	projectContent: WithId<ProjectContentType>
): ProjectContentSerialized {
	return {
		...projectContent,
		_id: projectContent._id.toString(),
		projectId: projectContent.projectId.toString()
	};
}

export async function readProjectContent(
	client: MongoClient,
	projectId: ObjectId
): Promise<WithId<ProjectContentType> | null> {
	return await getProjectContentsCol(client).findOne({ projectId });
}

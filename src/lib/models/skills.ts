import type { MongoClient, ObjectId, WithId } from 'mongodb';

const skillsCol = 'skills';

export type SkillType = {
	skill: string;
	level: number;
	tools: { name: string; link: string }[];
	description: string;
	projectIds: ObjectId[];
	lectureIds?: ObjectId[];
};

export function getSkillsCol(client: MongoClient) {
	return client.db().collection<SkillType>(skillsCol);
}

export type SkillSerialized = Omit<SkillType, 'projectIds' | 'lectureIds'> & {
	_id: string;
	projectIds: string[];
	lectureIds?: string[];
};

export function serializeSkill(skill: WithId<SkillType>): SkillSerialized {
	return {
		...skill,
		_id: skill._id.toString(),
		projectIds: skill.projectIds?.map((id) => id.toString()) ?? [],
		lectureIds: skill.lectureIds?.map((id) => id.toString()) ?? []
	};
}

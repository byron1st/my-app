import type { MongoClient } from 'mongodb';

const educationsCol = 'educations';

export type EducationType = {
	_id: string;
	degree: string;
	school: string;
	from: Date;
	to?: Date;
	note?: string;
	link?: string;
};

export function getEducationsCol(client: MongoClient) {
	return client.db().collection<EducationType>(educationsCol);
}

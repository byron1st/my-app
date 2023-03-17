import type { MongoClient } from 'mongodb';

const lecturesCol = 'lectures';

export type LectureType = {
	topic: string;
	description: string;
	from: Date;
	to: Date;
	count: number;
	org: string;
	target: string;
};

export function getLecturesCol(client: MongoClient) {
	return client.db().collection<LectureType>(lecturesCol);
}

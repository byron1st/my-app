import type { MongoClient } from 'mongodb';

const techStacksCol = 'techstacks';

export type TechStackType = {
	name: string;
	stack: string;
	link: string;
};

export function getTechStacksCol(client: MongoClient) {
	return client.db().collection<TechStackType>(techStacksCol);
}

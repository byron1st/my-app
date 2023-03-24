import type { MongoClient } from 'mongodb';

const repositoriesCol = 'repositories';

export type RepositoryType = {
	name: string;
	url: string;
	language: string | null;
	visibility: 'public' | 'private';
	license: {
		key: string;
		name: string;
		url: string;
	} | null;
	pushedAt: Date;
};

export function getRepositoriesCol(client: MongoClient) {
	return client.db().collection<RepositoryType>(repositoriesCol);
}

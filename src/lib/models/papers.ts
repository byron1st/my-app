import type { MongoClient } from 'mongodb';

const papersCol = 'papers';

export type PaperType = {
	title: string;
	authors: string[];
	link: string;
	date: Date;
	conference?: { title: string; location: string; date: string };
	journal?: { title: string; volume: string; pages: string; date: string };
};

export function getPapersCol(client: MongoClient) {
	return client.db().collection<PaperType>(papersCol);
}

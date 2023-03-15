import type { MongoClient } from 'mongodb';

const personalInfoCol = 'personalinfo';

export type PersonalInfoType = {
	email: { id: string; domain: string };
	work: { name: string; link: string };
	home: { name: string; link: string };
	socials: { name: string; link: string }[];
};

export function getPersonalInfoCol(client: MongoClient) {
	return client.db().collection<PersonalInfoType>(personalInfoCol);
}

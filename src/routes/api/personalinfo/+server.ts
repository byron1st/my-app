import { error, json } from '@sveltejs/kit';
import clientPromise from '$lib/server/db';
import { getPersonalInfoCol, type PersonalInfoSerialized } from '$lib/models/personalinfo';
import { serializeId } from '$lib/server/dbutils';
import type { RequestHandler } from './$types';

export const GET = (async () => {
	const client = await clientPromise;

	const result: PersonalInfoSerialized[] = (
		await getPersonalInfoCol(client).find({}).toArray()
	).map(serializeId);
	if (result.length === 0) {
		throw error(500, 'no personal info found');
	}

	return json(result[0]);
}) satisfies RequestHandler;

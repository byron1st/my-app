import { getPersonalInfoCol } from '$lib/models/personalinfo';
import clientPromise from '$lib/server/db';
import { serializeId } from '$lib/server/dbutils';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	const client = await clientPromise;

	const personalInfo = (await getPersonalInfoCol(client).find({}).toArray()).map(serializeId)[0];

	return { personalInfo };
}) satisfies LayoutServerLoad;

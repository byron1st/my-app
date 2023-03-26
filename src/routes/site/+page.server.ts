import { getTechStacksCol } from '$lib/models/techstacks';
import clientPromise from '$lib/server/db';
import { serializeId } from '$lib/server/dbutils';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const client = await clientPromise;

	const stacks = (await getTechStacksCol(client).find({}).toArray()).map(serializeId);

	return {
		props: { stacks }
	};
}) satisfies PageServerLoad;

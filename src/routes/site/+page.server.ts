import { getTechStacksCol } from '$lib/models/techstacks';
import clientPromise from '$lib/server/db';
import { serializeId } from '$lib/server/dbutils';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const client = await clientPromise;

	const stacks = getTechStacksCol(client)
		.find({})
		.sort({ priority: 1 })
		.toArray()
		.then((result) => result.map(serializeId));

	return {
		stacks: { streamed: stacks }
	};
}) satisfies PageServerLoad;

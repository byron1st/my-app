import { getEducationsCol } from '$lib/models/educations';
import { getPapersCol } from '$lib/models/papers';
import clientPromise from '$lib/server/db';
import { serializeId } from '$lib/server/dbutils';
import type { PageServerLoad } from './$types';

const myPaperFilter = ['Hwi Ahn', '안휘'];

export const load = (async () => {
	const client = await clientPromise;

	const educations = getEducationsCol(client)
		.find({})
		.sort({ from: -1 })
		.toArray()
		.then((result) => result.map(serializeId));

	const papers = getPapersCol(client)
		.find({})
		.sort({ date: -1 })
		.toArray()
		.then((result) => result.map(serializeId));

	return {
		educations: { streamed: educations },
		papers: {
			streamed: papers.then((papers) => ({
				myPapers: papers.filter((p) => myPaperFilter.includes(p.authors[0])),
				otherPapers: papers.filter((p) => !myPaperFilter.includes(p.authors[0]))
			}))
		}
	};
}) satisfies PageServerLoad;

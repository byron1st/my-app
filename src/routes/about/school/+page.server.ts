import { getEducationsCol, type EducationType } from '$lib/models/educations';
import { getPapersCol, type PaperType } from '$lib/models/papers';
import clientPromise from '$lib/server/db';
import { serializeId } from '$lib/server/dbutils';
import type { PageServerLoad } from './$types';

const myPaperFilter = ['Hwi Ahn', '안휘'];

export const load = (async () => {
	const client = await clientPromise;

	const educations: EducationType[] = (
		await getEducationsCol(client).find({}).sort({ from: -1 }).toArray()
	).map(serializeId);

	const papers: PaperType[] = (
		await getPapersCol(client).find({}).sort({ date: -1 }).toArray()
	).map(serializeId);

	return {
		props: {
			educations,
			myPapers: papers.filter((p) => myPaperFilter.includes(p.authors[0])),
			otherPapers: papers.filter((p) => !myPaperFilter.includes(p.authors[0]))
		}
	};
}) satisfies PageServerLoad;

import { error } from '@sveltejs/kit';
import type { PersonalInfoSerialized } from '$lib/models/personalinfo';
import type { LayoutLoad } from './$types';

export const load = (async ({ fetch }) => {
	try {
		const res = await fetch('/api/personalinfo');
		const personalInfo: PersonalInfoSerialized = await res.json();
		return { personalInfo };
	} catch (err) {
		console.error(err);
		throw error(500, 'failed to load personal info');
	}
}) satisfies LayoutLoad;

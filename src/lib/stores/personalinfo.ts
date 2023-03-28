import { writable, type Writable } from 'svelte/store';
import type { PersonalInfoSerialized } from '$lib/models/personalinfo';
import { getContext, setContext } from 'svelte';

const personalInfoStoreKey = 'personalInfo';
const personalInfo = writable<PersonalInfoSerialized>();

export function set(info: PersonalInfoSerialized) {
	personalInfo.set(info);
	setContext(personalInfoStoreKey, personalInfo);
}

export function get(): Writable<PersonalInfoSerialized> {
	return getContext(personalInfoStoreKey);
}

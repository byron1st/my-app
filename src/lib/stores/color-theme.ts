import { writable } from 'svelte/store';

export const colorTheme = writable<'light' | 'dark' | undefined>();

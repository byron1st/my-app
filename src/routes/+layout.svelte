<script lang="ts">
	import { inject } from '@vercel/analytics';
	import { dev } from '$app/environment';
	import Header from '$lib/component/Header/Header.svelte';
	import { set } from '$lib/stores/personalinfo';
	import type { LayoutData } from './$types';
	import '../app.css';

	export let data: LayoutData;

	set(data.personalInfo);

	inject({ mode: dev ? 'development' : 'production' });
</script>

<div
	class="flex h-full min-h-screen w-full flex-col items-center bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100"
>
	<Header />

	<main class="h-full w-full px-4 lg:w-[64rem]">
		<slot />
	</main>
</div>

<script lang="ts">
	import { inject } from '@vercel/analytics';
	import { browser, dev } from '$app/environment';
	import Header from '$lib/component/Header/Header.svelte';
	import { set } from '$lib/stores/personalinfo';
	import type { LayoutData } from './$types';
	import '../app.css';
	import { colorTheme } from '$lib/stores/color-theme';
	import { onMount } from 'svelte';
	import classNames from 'classnames';

	export let data: LayoutData;

	set(data.personalInfo);

	inject({ mode: dev ? 'development' : 'production' });

	function changeColorTheme(t: MediaQueryList | MediaQueryListEvent) {
		colorTheme.set(t.matches ? 'dark' : 'light');
	}

	onMount(() => {
		if ($colorTheme === 'system') {
			const t = window.matchMedia('(prefers-color-scheme: dark)');
			changeColorTheme(t);
			t.addEventListener('change', changeColorTheme);
		}
	});
</script>

<div
	class={classNames(
		'flex h-full min-h-screen w-full flex-col items-center bg-slate-a1 text-slate-a11',
		{ dark: $colorTheme === 'dark' }
	)}
>
	<Header />

	<main class="h-full w-full px-4 lg:w-[64rem]">
		<slot />
	</main>
</div>

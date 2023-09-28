<script lang="ts">
	import { onMount } from 'svelte';
	import classNames from 'classnames';
	import { inject } from '@vercel/analytics';
	import { dev } from '$app/environment';
	import Header from '$lib/component/Header/Header.svelte';
	import { set } from '$lib/stores/personalinfo';
	import Footer from '$lib/component/Footer/Footer.svelte';
	import { colorTheme } from '$lib/stores/color-theme';
	import type { LayoutData } from './$types';
	import '../app.css';

	export let data: LayoutData;

	set(data.personalInfo);

	inject({ mode: dev ? 'development' : 'production' });

	function changeColorTheme(t: MediaQueryList | MediaQueryListEvent) {
		colorTheme.set(t.matches ? 'dark' : 'light');
	}

	onMount(() => {
		if (!$colorTheme) {
			setTimeout(() => {
				const t = window.matchMedia('(prefers-color-scheme: dark)');
				changeColorTheme(t);
				t.addEventListener('change', changeColorTheme);
			}, 500);
		}
	});
</script>

{#if $colorTheme === undefined}
	<div class="flex justify-center items-center h-screen w-screen">
		<!-- Font 로딩 때문에 버벅이는 것을 방지하기 위해 font-sans 로 기본 폰트 적용 -->
		<p class="animate-pulse text-xl font-bold font-sans">Loading...</p>
	</div>
{:else}
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

		<Footer />
	</div>
{/if}

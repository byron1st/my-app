<script>
	import { slide } from 'svelte/transition';
	import Bars3 from '$lib/icons/Bars3.svelte';
	import XMark from '$lib/icons/XMark.svelte';
	import FadeInIcon from './FadeInIcon.svelte';
	import MenuList from './MenuList.svelte';

	let show = false;
</script>

<button on:click={() => (show = !show)}>
	{#if show}
		<FadeInIcon>
			<XMark class="h-6 w-6" />
		</FadeInIcon>
	{:else}
		<FadeInIcon>
			<Bars3 class="h-6 w-6" />
		</FadeInIcon>
	{/if}
</button>

{#if show}
	<div
		class="absolute top-12 left-0 flex w-full flex-col gap-2 bg-slate-50 px-8 dark:bg-slate-800"
		transition:slide={{ duration: 200 }}
	>
		<MenuList bottomBorder />
	</div>
{/if}

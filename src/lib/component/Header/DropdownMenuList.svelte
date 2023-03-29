<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import Bars3 from '$lib/icons/Bars3.svelte';
	import XMark from '$lib/icons/XMark.svelte';
	import FadeInIcon from '$lib/component/Header/FadeInIcon.svelte';
	import MenuList from '$lib/component/Header/MenuList.svelte';

	let show = false;

	function closeDropdown() {
		show = false;
	}
</script>

<button on:click={() => (show = !show)} aria-label="Menu">
	{#if show}
		<FadeInIcon icon={XMark} />
	{:else}
		<FadeInIcon icon={Bars3} />
	{/if}
</button>

{#if show}
	<div
		class="fixed top-12 left-0 h-full w-full bg-gray-800/50 dark:bg-gray-800/80"
		on:click={closeDropdown}
		on:keydown|preventDefault
		transition:fade={{ duration: 200 }}
	/>

	<div
		class="absolute top-12 left-0 flex w-full flex-col gap-2 bg-slate-50 px-8 dark:bg-slate-800"
		transition:slide={{ duration: 200 }}
	>
		<MenuList {closeDropdown} />
	</div>
{/if}

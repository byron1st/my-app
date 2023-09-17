<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import FadeInIcon from '$lib/component/Header/FadeInIcon.svelte';
	import MenuList from '$lib/component/Header/MenuList.svelte';
	import { Menu, X } from 'lucide-svelte';

	let show = false;

	function closeDropdown() {
		show = false;
	}
</script>

<button on:click={() => (show = !show)} aria-label="Menu">
	{#if show}
		<FadeInIcon icon={X} />
	{:else}
		<FadeInIcon icon={Menu} />
	{/if}
</button>

{#if show}
	<div
		class="fixed top-12 left-0 h-full w-full bg-gray-a1 opacity-80 z-10"
		on:click={closeDropdown}
		on:keydown|preventDefault
		transition:fade={{ duration: 200 }}
	/>

	<div
		class="absolute top-12 left-0 flex w-full flex-col gap-2 bg-slate-a1 px-8 z-10"
		transition:slide={{ duration: 200 }}
	>
		<MenuList {closeDropdown} />
	</div>
{/if}

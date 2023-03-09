<script lang="ts">
	import DropdownMenuItemDivider from '$lib/component/Header/DropdownMenuItemDivider.svelte';

	export let name: string;
	export let href: string;
	export let bottomBorder: boolean = false;
</script>

<a {href} class="transition hover:text-slate-500 dark:hover:text-slate-400">{name}</a>
{#if bottomBorder} <DropdownMenuItemDivider /> {/if}

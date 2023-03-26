<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import classnames from 'classnames';
	import { page } from '$app/stores';
	import DropdownMenuItemDivider from '$lib/component/Header/DropdownMenuItemDivider.svelte';

	export let name: string;
	export let href: string;
	export let onDropdown = false;

	const dispatch = createEventDispatcher();
</script>

<a
	{href}
	class={classnames('transition hover:underline', {
		underline: $page.url.pathname.startsWith(href)
	})}
	on:click={onDropdown ? () => dispatch('closeDropdown') : undefined}
>
	{name}
</a>
{#if onDropdown} <DropdownMenuItemDivider /> {/if}

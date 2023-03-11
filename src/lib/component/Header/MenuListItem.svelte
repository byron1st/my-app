<script lang="ts">
	import classnames from 'classnames';
	import { page } from '$app/stores';
	import DropdownMenuItemDivider from '$lib/component/Header/DropdownMenuItemDivider.svelte';

	export let name: string;
	export let href: string;
	export let bottomBorder: boolean = false;
</script>

<a
	{href}
	class={classnames('transition hover:underline', {
		underline: $page.url.pathname.startsWith(href)
	})}>{name}</a
>
{#if bottomBorder} <DropdownMenuItemDivider /> {/if}

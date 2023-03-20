<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let component: ComponentType;
	export let onClick: (() => void | Promise<void>) | undefined = undefined;
	export let href: string | undefined = undefined;
	export let openCurrentTab: boolean | undefined = undefined;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svelte:element
	this={onClick ? 'button' : 'a'}
	class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 active:bg-slate-300 dark:hover:bg-slate-700 dark:active:bg-slate-600"
	on:click={onClick}
	{href}
	target={href && !openCurrentTab ? '_blank' : undefined}
	rel={href && !openCurrentTab ? 'noopener noreferrer' : undefined}
>
	<svelte:component this={component} class="h-5 w-5 shrink-0" />
</svelte:element>

<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let component: ComponentType;
	export let onClick: () => void | Promise<void>;
</script>

<button
	class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 active:bg-slate-300 dark:hover:bg-slate-700 dark:active:bg-slate-600"
	on:click={onClick}
>
	<svelte:component this={component} class="h-5 w-5 shrink-0" />
</button>

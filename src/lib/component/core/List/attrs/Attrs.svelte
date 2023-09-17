<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let attrs: ({ component: ComponentType; value: string } | undefined)[] = [];
</script>

<div class="flex flex-row items-center gap-1">
	{#each attrs as attr}
		{#if attr}
			<svelte:component this={attr.component} size={12} />
			<p class="text-xs">{@html attr.value}</p>
		{/if}
	{/each}
</div>

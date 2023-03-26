<script lang="ts">
	import Icon from '$lib/component/core/Icon.svelte';
	import type { ComponentType } from 'svelte';

	export let attrs: ({ component: ComponentType; value: string } | undefined)[] = [];
</script>

<div class="flex flex-row items-center gap-1">
	{#each attrs as attr}
		{#if attr}
			<Icon icon={attr.component} size="sm" />
			<p class="text-xs">{@html attr.value}</p>
		{/if}
	{/each}
</div>

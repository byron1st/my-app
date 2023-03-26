<script lang="ts">
	import DescriptionContainer from '$lib/component/core/Description/DescriptionContainer.svelte';

	export let label: string;
	export let value: string;
	export let description: string | undefined = undefined;
	export let isLink = false;
</script>

<DescriptionContainer href={isLink ? value : undefined}>
	<div class="flex flex-row justify-between">
		<p class="shrink-0 text-sm">{label}</p>
		<p class="text-end text-sm text-slate-800/50 dark:text-slate-100/50">{value}</p>
	</div>

	{#if description}
		<p class="text-xs text-slate-800/50 dark:text-slate-100/50">{description}</p>
	{/if}
</DescriptionContainer>

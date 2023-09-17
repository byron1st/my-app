<script lang="ts">
	import DescriptionContainer from '$lib/component/core/Description/DescriptionContainer.svelte';

	export let label: string;
	export let value: string;
	export let description: string | undefined = undefined;
	export let isLink = false;
</script>

<DescriptionContainer href={isLink ? value : undefined}>
	<div class="flex flex-row justify-between">
		<p class="shrink-0 text-sm font-bold">{label}</p>
		<p class="text-end text-sm">{value}</p>
	</div>

	{#if description}
		<p class="text-xs opacity-80 font-light">{description}</p>
	{/if}
</DescriptionContainer>

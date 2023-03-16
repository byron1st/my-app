<script lang="ts">
	import Box from '$lib/component/Box.svelte';

	export let label: string;
	export let value: string;
	export let description: string | undefined = undefined;
</script>

<Box enableHover={false}>
	<div class="flex flex-col py-2 px-4">
		<div class="flex flex-row justify-between">
			<p class="shrink-0 text-sm">{label}</p>
			<p class="text-end text-sm text-slate-800/50 dark:text-slate-100/50">{value}</p>
		</div>

		{#if description}
			<p class="text-xs text-slate-800/50 dark:text-slate-100/50">{description}</p>
		{/if}
	</div>
</Box>

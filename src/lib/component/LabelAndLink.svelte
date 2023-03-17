<script lang="ts">
	import Box from '$lib/component/Box.svelte';

	export let label: string;
	export let href: string;
	export let description: string | undefined = undefined;
</script>

<Box enableClick>
	<a class="flex w-full flex-col py-2 px-4" {href} target="_blank" rel="noopener noreferrer">
		<div class="flex flex-row justify-between">
			<p class="shrink-0 text-sm">{label}</p>
			<p class="text-end text-sm text-slate-800/50 dark:text-slate-100/50">{href}</p>
		</div>

		{#if description}
			<p class="text-xs text-slate-800/50 dark:text-slate-100/50">{description}</p>
		{/if}
	</a>
</Box>

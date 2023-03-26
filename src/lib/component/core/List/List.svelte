<script lang="ts">
	import Box from '$lib/component/core/Box.svelte';

	export let title: string = '';
	export let subText = '';
</script>

<section id={$$props.id} class="w-full">
	{#if title}
		<h1 class="mb-1 px-4 text-sm text-slate-700 dark:text-slate-200">{title}</h1>
	{/if}

	<Box>
		<slot />
	</Box>

	{#if subText}
		<div class="mt-1 w-full px-4">
			<p class="text-xs text-slate-800/50 dark:text-slate-100/50">
				{subText}
			</p>
		</div>
	{/if}
</section>

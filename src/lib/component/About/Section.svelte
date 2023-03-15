<script lang="ts">
	import Box from '$lib/component/Box.svelte';

	export let title = '';
</script>

<section class="w-full">
	<h1 class="mb-1 px-4 text-sm text-slate-700 dark:text-slate-200">{title}</h1>

	<Box class="w-full" enableHover={false}>
		<div class="flex w-full flex-col">
			<slot />
		</div>
	</Box>
</section>

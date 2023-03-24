<script lang="ts">
	import Box from '$lib/component/Box.svelte';

	export let title = '';
</script>

<div>
	<h1 class="px-4 text-sm text-slate-700 dark:text-slate-200">{title}</h1>
	<Box enableHover={false}>
		<div class="flex w-full flex-col">
			<slot />
		</div>
	</Box>
</div>

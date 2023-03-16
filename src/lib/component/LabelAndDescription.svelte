<script lang="ts">
	import Box from '$lib/component/Box.svelte';

	export let label: string;
	export let description: string;
</script>

<Box enableHover={false}>
	<div class="flex flex-col py-2 px-4">
		<p class="text-sm">{label}</p>
		<div class="text-sm text-slate-800/50 dark:text-slate-100/50">
			{@html description.replace(/\n/g, '<br/>')}
		</div>
	</div>
</Box>

<script lang="ts">
	import Box from '$lib/component/core/Box.svelte';

	export let introduction: string;
</script>

<Box class="flex flex-col px-4 py-2">
	{@html introduction}
</Box>

<script lang="ts">
	import Box from '$lib/component/Box.svelte';

	export let social = '';
	export let link = '';
</script>

<Box classNames="h-10 w-40 shrink-0">
	<a
		class="flex h-full w-full cursor-pointer items-center justify-center"
		href={link}
		target="_blank"
		rel="noreferrer">{social}</a
	>
</Box>

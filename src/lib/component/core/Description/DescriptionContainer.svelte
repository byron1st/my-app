<script lang="ts">
	import Box from '$lib/component/core/Box.svelte';

	export let href: string | undefined = undefined;
</script>

<Box>
	<svelte:element
		this={href ? 'a' : 'div'}
		class="flex w-full flex-col py-2 px-4"
		{href}
		target="_blank"
		rel="noopener noreferrer"
	>
		<slot />
	</svelte:element>
</Box>

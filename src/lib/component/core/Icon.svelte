<script lang="ts">
	import type { ComponentType } from 'svelte';
	import classnames from 'classnames';

	export let icon: ComponentType;
	export let size: 'sm' | 'md' | 'lg' = 'md';
</script>

<svelte:component
	this={icon}
	class={classnames(
		{
			'h-3 w-3': size === 'sm',
			'h-5 w-5': size === 'md',
			'h-6 w-6': size === 'lg'
		},
		$$props.class
	)}
/>

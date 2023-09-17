<script lang="ts">
	import type { ComponentType } from 'svelte';
	import { fade } from 'svelte/transition';

	export let icon: ComponentType;
</script>

<div in:fade={{ delay: 10 }}>
	<svelte:component this={icon} size={20} />
</div>

<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let component: ComponentType;
</script>

<svelte:component this={component} class="h-5 w-5 shrink-0" />

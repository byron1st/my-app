<script lang="ts">
	import Icon from '$lib/component/core/Icon.svelte';
	import type { ComponentType } from 'svelte';
	import { fade } from 'svelte/transition';

	export let icon: ComponentType;
</script>

<div in:fade={{ delay: 10 }}>
	<Icon {icon} />
</div>

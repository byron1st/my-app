<script lang="ts">
	import Icon from '$lib/component/core/Icon.svelte';
	import ExclamationTriangle from '$lib/icons/ExclamationTriangle.svelte';

	export let error: Error;
</script>

<div class="flex h-10 w-full flex-row items-center justify-center gap-1 text-red-500">
	<Icon icon={ExclamationTriangle} />
	<p class="text-xs">{error.message}</p>
</div>

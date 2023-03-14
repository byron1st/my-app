<script lang="ts">
	import IconButton from '$lib/component/IconButton.svelte';
	import ExclamationCircle from '$lib/icons/ExclamationCircle.svelte';

	export let skill: string;
	export let type: string;
</script>

<div class="flex w-full flex-row justify-between py-2">
	<div class="flex flex-col ">
		<p>{skill}</p>
		<p class="text-xs text-slate-800/50 dark:text-slate-100/50">{type}</p>
	</div>

	<IconButton component={ExclamationCircle} />
</div>

<script lang="ts">
	import ExclamationCircle from '$lib/icons/ExclamationCircle.svelte';

	export let skill: string;
</script>

<div class="flex w-full flex-row items-center justify-between">
	<div class="flex flex-col py-2">
		<p>{skill}</p>
	</div>

	<ExclamationCircle class="h-5 w-5 shrink-0" />
</div>

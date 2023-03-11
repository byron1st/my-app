<script>
	import AtSymbol from '$lib/icons/AtSymbol.svelte';
	import Home from '$lib/icons/Home.svelte';
	import BuildingOffice from '$lib/icons/BuildingOffice.svelte';

	export let id = '';
	export let domain = '';
	export let isPersonal = false;

	$: href = `mailto:${id}@${domain}`;
</script>

<a class="flex w-fit flex-row items-center gap-1 text-sm hover:underline" {href}>
	{#if isPersonal}
		<Home class="h-4 w-4" />
	{:else}
		<BuildingOffice class="h-4 w-4" />
	{/if}
	<div class="flex flex-row items-center">
		{id}<AtSymbol class="h-3 w-3" />{domain}
	</div>
</a>

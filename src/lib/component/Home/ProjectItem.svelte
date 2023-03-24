<script lang="ts">
	import IconButton from '$lib/component/IconButton.svelte';
	import BuildingOffice from '$lib/icons/BuildingOffice.svelte';
	import ChevronRight from '$lib/icons/ChevronRight.svelte';
	import { ProjectKind, type ProjectSerialized } from '$lib/models/projects';
	import Home from '$lib/icons/Home.svelte';

	export let project: ProjectSerialized;
</script>

<div class="flex w-full flex-row justify-between py-2">
	<div class="flex flex-row items-center gap-2">
		{#if project.kind === ProjectKind.PERSONAL}
			<Home class="h-5 w-5" />
		{:else}
			<BuildingOffice class="h-5 w-5" />
		{/if}
		<p>{project.name}</p>
	</div>

	<div class="flex flex-row gap-4">
		<IconButton component={ChevronRight} href={`/projects#${project._id}`} openCurrentTab />
	</div>
</div>

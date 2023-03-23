<script lang="ts">
	import IconButton from '$lib/component/IconButton.svelte';
	import BuildingOffice from '$lib/icons/BuildingOffice.svelte';
	import ChevronRight from '$lib/icons/ChevronRight.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
	import type { ProjectSerialized } from '$lib/models/projects';
	import Home from '$lib/icons/Home.svelte';

	export let project: ProjectSerialized;
</script>

<div class="flex w-full flex-row justify-between py-2">
	<div class="flex flex-row items-center gap-2">
		{#if project.isPersonal}
			<Home class="h-5 w-5" />
		{:else}
			<BuildingOffice class="h-5 w-5" />
		{/if}
		<p>{project.name}</p>
	</div>

	<div class="flex flex-row gap-4">
		{#if project.link && project.link.startsWith('https://github.com')}
			<IconButton component={GitHub} href={project.link} />
		{/if}

		{#if !project.isPersonal}
			<IconButton component={ChevronRight} href={`/about#projects-${project._id}`} openCurrentTab />
		{/if}
	</div>
</div>

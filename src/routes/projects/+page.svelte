<script lang="ts">
	import LoadingError from '$lib/component/LoadingError.svelte';
	import ProjectItem from '$lib/component/Projects/ProjectItem.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<meta name="description" content="Description about Hwi's projects" />
</svelte:head>

<div class="flex w-full flex-col">
	<div class="flex flex-col sm:py-20">
		{#await data.projects.streamed then projects}
			{#each projects as project}
				<ProjectItem {project} />
			{/each}
		{:catch error}
			<LoadingError {error} />
		{/await}
	</div>
</div>

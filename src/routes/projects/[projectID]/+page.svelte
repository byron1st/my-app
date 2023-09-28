<script lang="ts">
	import ProjectContent from '$lib/component/Project/ProjectContent.svelte';
	import ProjectInfoPanel from '$lib/component/Project/ProjectInfoPanel.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<meta name="description" content={`Project ${data.project.name}`} />
</svelte:head>

<div class="text-xs">
	<a class="hover:underline" href="/projects">projects</a> / {data.project.name}
</div>
<div class="flex flex-col md:flex-row gap-4 py-20">
	<div class="md:w-96 shrink-0">
		<ProjectInfoPanel project={data.project} />
	</div>

	<div class="flex flex-col w-full">
		{#if data.content !== null}
			<ProjectContent content={data.content} />
		{:else}
			<section class="mb-6">
				<p>{data.project.description}</p>
			</section>
		{/if}
	</div>
</div>

<script lang="ts">
	import { ProjectStatus } from '$lib/models/projects';
	import Section from '$lib/component/About/Section.svelte';
	import SectionItem from '$lib/component/About/SectionItem.svelte';
	import type { PageServerData } from './$types';
	import ProjectItem from '$lib/component/Projects/ProjectItem.svelte';

	export let data: PageServerData;

	$: currentProjects = data.props.projects.filter(
		(project) => project.status === ProjectStatus.ONGOING
	);
</script>

<div class="flex w-full flex-col">
	<div class="flex flex-col gap-4 py-20">
		<Section title="진행 중인 프로젝트들">
			{#each currentProjects as project, index}
				<SectionItem isFirst={index === 0} isLast={index === currentProjects.length - 1}>
					<ProjectItem {project} />
				</SectionItem>
			{/each}
		</Section>
	</div>
</div>

<script lang="ts">
	import Section from '$lib/component/About/Section.svelte';
	import SectionItem from '$lib/component/About/SectionItem.svelte';
	import Introduction from '$lib/component/Home/Introduction.svelte';
	import ProjectItem from '$lib/component/Home/ProjectItem.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	$: projects = data.props.projects;
	$: introduction = data.props.personalInfo.introduction;
</script>

<div class="flex w-full flex-col items-center">
	<div class="flex flex-col items-center gap-4 py-20">
		<div class="flex flex-col items-center gap-2">
			<img src="/profile1.jpeg" alt="profile" class="h-32 w-32 rounded-full border-2" />
			<h1 class="text-2xl font-bold">Hello, World!</h1>
			<Introduction {introduction} />
		</div>

		<Section title="진행 중인 프로젝트들">
			{#each projects as project, index}
				<SectionItem isFirst={index === 0} isLast={index === projects.length - 1}>
					<ProjectItem {project} />
				</SectionItem>
			{/each}
		</Section>
	</div>
</div>

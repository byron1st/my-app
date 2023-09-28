<script lang="ts">
	import ProjectChallenge from '$lib/component/Project/ProjectChallenge.svelte';
	import ProjectContentSection from '$lib/component/Project/ProjectContentSection.svelte';
	import ProjectContentSectionItem from '$lib/component/Project/ProjectContentSectionItem.svelte';
	import type { ProjectContentSerialized } from '$lib/models/projectcontents';

	export let content: ProjectContentSerialized;
</script>

<ProjectContentSection label="프로젝트 개요">
	<p>{content.overview}</p>
</ProjectContentSection>

<ProjectContentSection label="주요 난제">
	{#each content.challenges as { title, challenge, solution }}
		<ProjectChallenge {title} {challenge} {solution} />
	{/each}
</ProjectContentSection>

<ProjectContentSection label="기술 소감">
	{#each content.techstacks as { techstack, thought }}
		<ProjectContentSectionItem label={techstack} content={thought} />
	{/each}
</ProjectContentSection>

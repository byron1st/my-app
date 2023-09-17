<script lang="ts">
	import { ProjectKind, type ProjectWithSkillRepoSerialized } from '$lib/models/projects';
	import RepoItem from '$lib/component/Projects/RepoItem.svelte';
	import DurationAttr from '$lib/component/core/List/attrs/DurationAttr.svelte';
	import Tag from '$lib/component/core/Tag.svelte';
	import TextAttr from '$lib/component/core/List/attrs/TextAttr.svelte';
	import { Briefcase, Users } from 'lucide-svelte';

	export let project: ProjectWithSkillRepoSerialized;
	$: repos = project.repoInfo;
</script>

<div class="flex flex-col">
	<div class="flex flex-row items-baseline gap-1 font-bold">
		{project.name}
	</div>

	<TextAttr text={project.overview} />

	<DurationAttr from={project.from} to={project.to} format="YYYY-MM-DD" />

	{#if project.kind === ProjectKind.WORK}
		<div class="flex flex-row flex-wrap items-center">
			<div class="mr-2 flex shrink-0 flex-row items-center gap-1">
				<Briefcase size={12} />
				<p class="text-xs">{project.role}</p>
			</div>
			<div class="flex shrink-0 flex-row items-center gap-1">
				<Users size={12} />
				<p class="text-xs">{project.team}</p>
			</div>
		</div>
	{/if}

	{#if repos}
		{#each repos as repo}
			<RepoItem {repo} />
		{/each}
	{/if}

	<div class="mt-2 flex flex-row flex-wrap gap-1">
		{#each project.tags as tag}
			<Tag {tag} />
		{/each}
	</div>
</div>

<script lang="ts">
	import { ProjectKind, type ProjectWithSkillRepoSerialized } from '$lib/models/projects';
	import Link from '$lib/icons/Link.svelte';
	import RepoItem from '$lib/component/Projects/RepoItem.svelte';
	import UserCircle from '$lib/icons/UserCircle.svelte';
	import Users from '$lib/icons/Users.svelte';
	import DurationAttr from '$lib/component/core/List/attrs/DurationAttr.svelte';
	import Tag from '$lib/component/core/Tag.svelte';
	import TextAttr from '$lib/component/core/List/attrs/TextAttr.svelte';
	import Icon from '$lib/component/core/Icon.svelte';

	export let project: ProjectWithSkillRepoSerialized;
	$: repos = project.repoInfo;
</script>

<div class="flex flex-col">
	<div class="flex flex-row items-baseline gap-1">
		{project.name}
		{#if project.link}
			<a href={project.link} target="_blank" rel="noopener noreferrer"><Link class="h-3 w-3" /></a>
		{/if}
	</div>

	<TextAttr text={project.overview} isSubtle />

	<DurationAttr from={project.from} to={project.to} format="YYYY-MM-DD" />

	{#if project.kind === ProjectKind.WORK}
		<div class="flex flex-row flex-wrap items-center">
			<div class="mr-2 flex shrink-0 flex-row items-center gap-1">
				<Icon icon={UserCircle} size="sm" />
				<p class="text-xs">{project.role}</p>
			</div>
			<div class="flex shrink-0 flex-row items-center gap-1">
				<Icon icon={Users} size="sm" />
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

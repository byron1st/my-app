<script lang="ts">
	import { ProjectKind, type ProjectWithSkillRepoSerialized } from '$lib/models/projects';
	import Link from '$lib/icons/Link.svelte';
	import RepoItem from '$lib/component/Projects/RepoItem.svelte';
	import UserCircle from '$lib/icons/UserCircle.svelte';
	import Users from '$lib/icons/Users.svelte';
	import Duration from '$lib/component/Duration.svelte';

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

	<p class="text-xs text-slate-800/50 dark:text-slate-100/50">
		{project.overview ?? ''}
	</p>

	<Duration from={project.from} to={project.to} format="YYYY-MM-DD" />

	{#if project.kind === ProjectKind.WORK}
		<div class="flex flex-row flex-wrap items-center">
			<div class="mr-2 flex shrink-0 flex-row items-center gap-1">
				<UserCircle class="h-3 w-3" />
				<p class="text-xs">{project.role}</p>
			</div>
			<div class="flex shrink-0 flex-row items-center gap-1">
				<Users class="h-3 w-3" />
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
			<div class="rounded-lg bg-slate-200 py-1 px-1 text-xs dark:bg-slate-700">#{tag}</div>
		{/each}
	</div>
</div>

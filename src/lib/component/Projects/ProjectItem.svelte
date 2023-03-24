<script lang="ts">
	import { ProjectKind, type ProjectSerialized } from '$lib/models/projects';
	import type { Repo } from '$lib/server/github';
	import Link from '$lib/icons/Link.svelte';
	import IconButton from '$lib/component/IconButton.svelte';
	import RepoItem from '$lib/component/Projects/RepoItem.svelte';
	import UserCircle from '$lib/icons/UserCircle.svelte';
	import Users from '$lib/icons/Users.svelte';
	import Duration from '$lib/component/Duration.svelte';
	import BuildingOffice from '$lib/icons/BuildingOffice.svelte';
	import Home from '$lib/icons/Home.svelte';
	import AcademicCap from '$lib/icons/AcademicCap.svelte';

	export let project: ProjectSerialized & { repoInfo: Repo[] | null };
	$: repos = project.repoInfo;
</script>

<div class="flex w-full flex-row justify-between py-2">
	<div class="flex flex-row items-center gap-2">
		<div class="flex flex-col">
			<div class="flex flex-row items-baseline gap-1">
				{project.name}
				{#if project.link}
					<a href={project.link} target="_blank" rel="noopener noreferrer"
						><Link class="h-3 w-3" /></a
					>
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
		</div>
	</div>

	<div class="flex flex-row gap-4">
		{#if project.kind === ProjectKind.WORK}
			<BuildingOffice class="h-6 w-6" />
		{:else if project.kind === ProjectKind.PERSONAL}
			<Home class="h-6 w-6" />
		{:else}
			<AcademicCap class="h-6 w-6" />
		{/if}
	</div>
</div>

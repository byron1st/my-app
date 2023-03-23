<script lang="ts">
	import IconButton from '$lib/component/IconButton.svelte';
	import CalendarDays from '$lib/icons/CalendarDays.svelte';
	import ChevronRight from '$lib/icons/ChevronRight.svelte';
	import CodeBracket from '$lib/icons/CodeBracket.svelte';
	import GitBranchOutline from '$lib/icons/GitBranchOutline.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
	import Link from '$lib/icons/Link.svelte';
	import type { ProjectSerialized } from '$lib/models/projects';
	import type { Repo } from '$lib/server/github';
	import dayjs from 'dayjs';

	export let project: ProjectSerialized & { repoInfo: Repo | null };
	$: repo = project.repoInfo;
</script>

<div class="flex w-full flex-row justify-between py-2">
	<div class="flex flex-row items-center gap-2">
		<div class="flex flex-col">
			<p>{project.name}</p>

			{#if repo}
				<p class="text-xs text-slate-800/50 dark:text-slate-100/50">
					{repo.description ?? ''}
				</p>

				<div class="flex flex-row gap-2">
					<div class="flex flex-row items-center gap-1">
						<GitBranchOutline class="h-3 w-3" />
						<p class="text-xs">{dayjs(repo.pushed_at).format('YYYY-MM-DD')}</p>
					</div>
					<div class="flex flex-row items-center gap-1">
						<CodeBracket class="h-3 w-3" />
						<p class="text-xs">{repo.language}</p>
					</div>
				</div>
			{/if}
		</div>
	</div>

	<div class="flex flex-row gap-4">
		{#if project.link}
			<IconButton component={Link} href={project.link} />
		{/if}
		{#if project.repo}
			<IconButton component={GitHub} href={`https://github.com/${project.repo}`} />
		{/if}
	</div>
</div>

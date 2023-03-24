<script lang="ts">
	import dayjs from 'dayjs';
	import CodeBracket from '$lib/icons/CodeBracket.svelte';
	import Eye from '$lib/icons/Eye.svelte';
	import EyeSlash from '$lib/icons/EyeSlash.svelte';
	import GitCommitOutline from '$lib/icons/GitCommitOutline.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
	import type { RepositoryType } from '$lib/models/repositories';

	export let repo: RepositoryType;
</script>

<div class="flex flex-row flex-wrap items-center">
	<a
		class="mr-2 flex flex-row items-center gap-1 hover:border-slate-500 hover:bg-slate-200 active:border-slate-600 active:bg-slate-300 dark:hover:border-slate-400 dark:hover:bg-slate-700 dark:active:border-slate-300 dark:active:bg-slate-600"
		href={repo.url}
		target="_blank"
		rel="noopener noreferrer"
	>
		<GitHub class="h-3 w-3" />
		{#if repo.visibility === 'private'}
			<EyeSlash class="h-3 w-3" />
		{:else}
			<Eye class="h-3 w-3" />
		{/if}
		<p class="text-xs">{repo.name}</p>
	</a>

	<div class="mr-2 flex flex-row items-center gap-1">
		<CodeBracket class="h-3 w-3" />
		<p class="text-xs">{repo.language}</p>
	</div>

	<div class="flex flex-row items-center gap-1">
		<GitCommitOutline class="h-3 w-3" />
		<p class="text-xs">{dayjs(repo.pushedAt).format('YYYY-MM-DD')}</p>
	</div>
</div>

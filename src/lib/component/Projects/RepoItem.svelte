<script lang="ts">
	import dayjs from 'dayjs';
	import CodeBracket from '$lib/icons/CodeBracket.svelte';
	import Eye from '$lib/icons/Eye.svelte';
	import EyeSlash from '$lib/icons/EyeSlash.svelte';
	import GitCommitOutline from '$lib/icons/GitCommitOutline.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
	import type { RepositoryType } from '$lib/models/repositories';
	import Icon from '$lib/component/core/Icon.svelte';

	export let repo: RepositoryType;
</script>

<div class="flex flex-row flex-wrap items-center">
	<a
		class="mr-2 flex flex-row items-center gap-1 hover:border-slate-a8 hover:bg-slate-a4 active:border-slate-a8 active:bg-slate-a5"
		href={repo.url}
		target="_blank"
		rel="noopener noreferrer"
	>
		<Icon icon={GitHub} size="sm" />
		{#if repo.visibility === 'private'}
			<Icon icon={EyeSlash} size="sm" />
		{:else}
			<Icon icon={Eye} size="sm" />
		{/if}
		<p class="text-xs">{repo.name}</p>
	</a>

	<div class="mr-2 flex flex-row items-center gap-1">
		<Icon icon={CodeBracket} size="sm" />
		<p class="text-xs">{repo.language}</p>
	</div>

	<div class="flex flex-row items-center gap-1">
		<Icon icon={GitCommitOutline} size="sm" />
		<p class="text-xs">{dayjs(repo.pushedAt).format('YYYY-MM-DD')}</p>
	</div>
</div>

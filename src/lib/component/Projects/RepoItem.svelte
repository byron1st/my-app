<script lang="ts">
	import dayjs from 'dayjs';
	import GitHub from '$lib/icons/GitHub.svelte';
	import type { RepositoryType } from '$lib/models/repositories';
	import Icon from '$lib/component/core/Icon.svelte';
	import { Code, Eye, EyeOff, GitCommit } from 'lucide-svelte';

	export let repo: RepositoryType;
</script>

<div class="flex flex-row flex-wrap items-center">
	<div
		class="mr-2 flex flex-row items-center gap-1 hover:border-slate-a8 hover:bg-slate-a4 active:border-slate-a8 active:bg-slate-a5"
	>
		<Icon icon={GitHub} size="sm" />
		{#if repo.visibility === 'private'}
			<EyeOff size={12} />
		{:else}
			<Eye size={12} />
		{/if}
		<p class="text-xs">{repo.name}</p>
	</div>

	<div class="mr-2 flex flex-row items-center gap-1">
		<Code size={12} />
		<p class="text-xs">{repo.language}</p>
	</div>

	<div class="flex flex-row items-center gap-1">
		<GitCommit size={12} />
		<p class="text-xs">{dayjs(repo.pushedAt).format('YYYY-MM-DD')}</p>
	</div>
</div>

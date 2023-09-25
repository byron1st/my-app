<script lang="ts">
	import Icon from '$lib/component/core/Icon.svelte';
	import type { RepositoryType } from '$lib/models/repositories';
	import GitHub from '$lib/icons/GitHub.svelte';
	import { Code, Eye, EyeOff, GitCommit } from 'lucide-svelte';
	import dayjs from 'dayjs';

	export let repo: RepositoryType;
</script>

<div class="flex flex-row justify-between items-center h-12">
	<div class="shrink-0 w-8">
		<Icon icon={GitHub} />
	</div>

	<div class="flex flex-col flex-1 border-b border-b-slate-a6 h-full justify-center">
		<a class="hover:underline text-sm" href={repo.url}>{repo.name}</a>
		<div class="flex flex-row items-center text-xs font-light opacity-80">
			{#if repo.visibility === 'private'}
				<EyeOff class="mr-2" size={12} />
			{:else}
				<Eye class="mr-2" size={12} />
			{/if}

			<div class="mr-2 flex flex-row items-center gap-1">
				<Code size={12} />
				<p>{repo.language}</p>
			</div>

			<div class="flex flex-row items-center gap-1">
				<GitCommit size={12} />
				<p>{dayjs(repo.pushedAt).format('YYYY-MM-DD')}</p>
			</div>
		</div>
	</div>
</div>

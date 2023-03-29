<script lang="ts">
	import { get } from '$lib/stores/personalinfo';
	import ChevronRight from '$lib/icons/ChevronRight.svelte';
	import List from '$lib/component/core/List/List.svelte';
	import ListItem from '$lib/component/core/List/ListItem.svelte';
	import Introduction from '$lib/component/Home/Introduction.svelte';
	import { ProjectKind } from '$lib/models/projects';
	import LoadingError from '$lib/component/LoadingError.svelte';
	import SkeletonListItems from '$lib/component/core/List/SkeletonListItems.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const personalInfo = get();
</script>

<div class="flex w-full flex-col items-center">
	<div class="flex max-w-md flex-col items-center gap-4 sm:py-20">
		<div class="flex flex-col items-center gap-2">
			<img src="/profile.jpg" alt="profile" class="h-32 w-32 rounded-full border-2" />
			<h1 class="text-2xl font-bold">Hello, World!</h1>
			<Introduction introduction={$personalInfo.introduction} />
		</div>

		<List title="진행 중인 프로젝트들">
			{#await data.projects.streamed}
				<SkeletonListItems />
			{:then projects}
				{#each projects as project, index}
					<ListItem
						title={project.name}
						kind={project.kind === ProjectKind.PERSONAL
							? '개인'
							: project.kind === ProjectKind.EDUCATION
							? '학습'
							: '회사'}
						length={projects.length}
						{index}
						leftIcon={ChevronRight}
						href={`/projects#${project._id}`}
					/>
				{/each}
			{:catch error}
				<LoadingError {error} />
			{/await}
		</List>
	</div>
</div>

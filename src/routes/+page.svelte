<script lang="ts">
	import ChevronRight from '$lib/icons/ChevronRight.svelte';
	import List from '$lib/component/core/List/List.svelte';
	import ListItem from '$lib/component/core/List/ListItem.svelte';
	import Introduction from '$lib/component/Home/Introduction.svelte';
	import { ProjectKind } from '$lib/models/projects';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	$: projects = data.props.projects;
	$: introduction = data.props.personalInfo.introduction;
</script>

<div class="flex w-full flex-col items-center">
	<div class="flex flex-col items-center gap-4 py-20">
		<div class="flex flex-col items-center gap-2">
			<img src="/profile1.jpeg" alt="profile" class="h-32 w-32 rounded-full border-2" />
			<h1 class="text-2xl font-bold">Hello, World!</h1>
			<Introduction {introduction} />
		</div>

		<List title="진행 중인 프로젝트들">
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
		</List>
	</div>
</div>

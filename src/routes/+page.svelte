<script lang="ts">
	import ChevronRight from '$lib/icons/ChevronRight.svelte';
	import BuildingOffice2 from '$lib/icons/BuildingOffice2.svelte';
	import Home from '$lib/icons/Home.svelte';
	import Section from '$lib/component/About/Section.svelte';
	import SectionItem from '$lib/component/About/SectionItem.svelte';
	import Box from '$lib/component/Box.svelte';
	import Introduction from '$lib/component/Home/Introduction.svelte';
	import ProjectItem from '$lib/component/Home/ProjectItem.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	$: projects = data.props.projects;
</script>

<main class="flex w-full flex-col items-center">
	<div class="flex flex-col items-center gap-4 py-20">
		<div class="flex flex-col items-center gap-2">
			<img src="/profile1.jpeg" alt="profile" class="h-32 w-32 rounded-full border-2" />
			<h1 class="text-2xl font-bold">Hello, World!</h1>
			<Introduction />
		</div>

		<Section title="진행 중인 프로젝트들">
			{#each projects as project, index}
				<SectionItem isFirst={index === 0} isLast={index === projects.length - 1}>
					<ProjectItem {project} />
				</SectionItem>
			{/each}
		</Section>

		<Box class="w-full py-2 px-4">
			<a class="flex w-full flex-row items-center justify-between" href="/about#projects">
				<div class="flex flex-row items-center gap-2">
					<BuildingOffice2 class="h-5 w-5" />
					<p>더 많은 회사 프로젝트들</p>
				</div>

				<ChevronRight class="h-5 w-5" />
			</a>
		</Box>

		<Box class="w-full py-2 px-4">
			<a class="flex flex-row items-center justify-between" href="/projects">
				<div class="flex flex-row items-center gap-2">
					<Home class="h-5 w-5" />
					<p>더 많은 개인 프로젝트들</p>
				</div>

				<ChevronRight class="h-5 w-5" />
			</a>
		</Box>
	</div>
</main>

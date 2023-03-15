<script lang="ts">
	import CareerItem from '$lib/component/About/CareerItem.svelte';
	import ProjectItem from '$lib/component/About/ProjectItem.svelte';
	import Section from '$lib/component/About/Section.svelte';
	import SectionItem from '$lib/component/About/SectionItem.svelte';
	import SkillItem from '$lib/component/About/SkillItem.svelte';
	import type { PageServerData } from './$types';

	// 경력
	// 기술 (클릭해서 모달로 자세한 설명 띄우기. 관련 프로젝트/강의 reference 포함)
	// 회사 프로젝트
	// 개인 프로젝트
	// 강의

	export let data: PageServerData;
	$: skills = data.props.skills;
	$: projects = data.props.projects;
</script>

<div class="flex w-full flex-col gap-6">
	<Section title="경력">
		<SectionItem href="https://bigpicturelabs.io" isFirst isLast>
			<CareerItem work="빅픽처랩(주)" position="CTO, 풀스텍 개발자" from={new Date('2018-05-01')} />
		</SectionItem>
	</Section>

	<Section title="기술">
		{#each skills as { skill, level, description }, index}
			<SectionItem isFirst={index === 0} isLast={index === skills.length - 1}>
				<SkillItem {skill} {description} {level} />
			</SectionItem>
		{/each}
	</Section>

	<section class="w-full">
		<h1 class="mb-1 px-4 text-sm text-slate-700 dark:text-slate-200">프로젝트</h1>

		<div class="w-full gap-1 sm:grid sm:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<ProjectItem {project} />
			{/each}
		</div>
	</section>
</div>

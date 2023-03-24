<script lang="ts">
	import CareerItem from '$lib/component/About/CareerItem.svelte';
	import LectureItem from '$lib/component/About/LectureItem.svelte';
	import Section from '$lib/component/About/Section.svelte';
	import SectionItem from '$lib/component/About/SectionItem.svelte';
	import SkillItem from '$lib/component/About/SkillItem.svelte';
	import Box from '$lib/component/Box.svelte';
	import ChevronRight from '$lib/icons/ChevronRight.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	$: skills = data.props.skills;
	$: lectures = data.props.lectures;
</script>

<div class="flex w-full flex-col gap-6">
	<Section title="경력">
		<SectionItem href="https://bigpicturelabs.io" isFirst isLast>
			<CareerItem work="빅픽처랩(주)" position="CTO, 풀스텍 개발자" from={new Date('2018-05-01')} />
		</SectionItem>
	</Section>

	<Section title="주요 기술">
		{#each skills as { skill, level, description }, index}
			<SectionItem isFirst={index === 0} isLast={index === skills.length - 1}>
				<SkillItem {skill} {description} {level} />
			</SectionItem>
		{/each}
	</Section>

	<Box enableClick>
		<a href="/projects" class="flex w-full flex-row justify-between py-2 px-4">
			<p>프로젝트들</p>
			<ChevronRight class="h-6 w-6" />
		</a>
	</Box>

	<Section
		title="주요 강의"
		subText="그 외에 다수의 (일반인 대상) 블록체인 소개, (주니어 개발자 대상) 소프트웨어 아키텍처 소개 강의들을 수행하였습니다."
	>
		{#each lectures as lecture, index}
			<SectionItem isFirst={index === 0} isLast={index === skills.length - 1}>
				<LectureItem {lecture} />
			</SectionItem>
		{/each}
	</Section>
</div>

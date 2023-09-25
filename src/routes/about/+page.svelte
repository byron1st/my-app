<script lang="ts">
	import { ChevronRight, ExternalLink } from 'lucide-svelte';
	import CareerAttrs from '$lib/component/core/List/attrs/CareerAttrs.svelte';
	import LectureAttrs from '$lib/component/core/List/attrs/LectureAttrs.svelte';
	import SkillActions from '$lib/component/core/List/actions/SkillActions.svelte';
	import List from '$lib/component/core/List/List.svelte';
	import ListItem from '$lib/component/core/List/ListItem.svelte';
	import LoadingError from '$lib/component/LoadingError.svelte';
	import SkeletonListItems from '$lib/component/core/List/SkeletonListItems.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<meta
		name="description"
		content="Description about Hwi's career, professional skills, and lectures"
	/>
</svelte:head>

<div class="flex w-full flex-col gap-6">
	<List title="경력">
		<ListItem title="빅픽처랩(주)" href="https://bigpicturelabs.io" length={3} index={0}>
			<CareerAttrs
				position="CTO, 풀스텍 개발자"
				from={new Date('2018-05-01')}
				overview="블록체인 기반 서비스 및 시스템 설계, 개발 및 운영"
				slot="attributes"
			/>
			<ExternalLink size={20} slot="leftItem" />
		</ListItem>
		<ListItem title="주식회사 네브마인" length={3} index={1}>
			<CareerAttrs
				position="대표"
				from={new Date('2016-03-01')}
				to={new Date('2018-05-01')}
				overview="개발자의 코드 추천 및 탐색을 돕는 도구 NavMine 개발 및 판매"
				slot="attributes"
			/>
			<ExternalLink size={20} slot="leftItem" />
		</ListItem>
		<ListItem title="네이버" href="https://www.naver.com" length={3} index={2}>
			<CareerAttrs
				position="인턴"
				from={new Date('2012-07-01')}
				to={new Date('2012-08-31')}
				overview="Play Framework 기반의 버전 관리 시스템 NFORGE4 (현 Yobi) 개발"
				slot="attributes"
			/>
			<ExternalLink size={20} slot="leftItem" />
		</ListItem>
	</List>

	<List title="주요 기술">
		{#await data.skills.streamed}
			<SkeletonListItems />
		{:then skills}
			{#each skills as skill, index}
				<ListItem length={skills.length} {index} title={skill.skill}>
					<SkillActions {skill} slot="leftItem" />
				</ListItem>
			{/each}
		{:catch error}
			<LoadingError {error} />
		{/await}
	</List>

	<List>
		<ListItem title="프로젝트들" href="/projects" length={1} index={0}>
			<ChevronRight size={20} slot="leftItem" />
		</ListItem>
	</List>

	<List
		title="주요 강의"
		subText="그 외에 다수의 (일반인 대상) 블록체인 소개, (주니어 개발자 대상) 소프트웨어 아키텍처 소개 강의들을 수행하였습니다."
	>
		{#await data.lectures.streamed}
			<SkeletonListItems />
		{:then lectures}
			{#each lectures as lecture, index}
				<ListItem length={lectures.length} {index} title={lecture.description}>
					<LectureAttrs {lecture} slot="attributes" />
					<p class="shrink-0" slot="leftItem">{lecture.count}회</p>
				</ListItem>
			{/each}
		{:catch error}
			<LoadingError {error} />
		{/await}
	</List>
</div>

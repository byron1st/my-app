<script lang="ts">
	import CareerAttrs from '$lib/component/core/List/attrs/CareerAttrs.svelte';
	import LectureAttrs from '$lib/component/core/List/attrs/LectureAttrs.svelte';
	import SkillActions from '$lib/component/core/List/actions/SkillActions.svelte';
	import List from '$lib/component/core/List/List.svelte';
	import ListItem from '$lib/component/core/List/ListItem.svelte';
	import ArrowTopRightOnSquare from '$lib/icons/ArrowTopRightOnSquare.svelte';
	import ChevronRight from '$lib/icons/ChevronRight.svelte';
	import LoadingError from '$lib/component/LoadingError.svelte';
	import SkeletonListItems from '$lib/component/core/List/SkeletonListItems.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="flex w-full flex-col gap-6">
	<List title="경력">
		<ListItem
			title="빅픽처랩(주)"
			href="https://bigpicturelabs.io"
			length={1}
			index={0}
			leftIcon={ArrowTopRightOnSquare}
		>
			<CareerAttrs position="CTO, 풀스텍 개발자" from={new Date('2018-05-01')} slot="attributes" />
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
		<ListItem title="프로젝트들" href="/projects" length={1} index={0} leftIcon={ChevronRight} />
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

<script lang="ts">
	import Section from '$lib/component/About/Section.svelte';
	import SectionItem from '$lib/component/About/SectionItem.svelte';
	import Box from '$lib/component/Box.svelte';
	import IconButton from '$lib/component/IconButton.svelte';
	import ChevronRight from '$lib/icons/ChevronRight.svelte';
	import Home from '$lib/icons/Home.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	$: projects = data.props.projects;
</script>

<main class="flex w-full flex-col items-center pt-20">
	<div class="flex flex-col items-center gap-4">
		<div class="flex flex-col items-center gap-2">
			<img src="/profile1.jpeg" alt="profile" class="h-32 w-32 rounded-full border-2" />
			<h1 class="text-2xl font-bold">Hello, World!</h1>
			<Box class="flex flex-col px-4 py-2" enableHover={false}>
				<p>저의 홈페이지에 오신 것을 환영합니다!</p>
				<p>전 웹서비스 설계와 개발을 좋아하는 프로그래머입니다.</p>
				<br />
				<p>
					제가 누군지 궁금하시면 <a href="/about"><b>about:me</b></a>를,
				</p>
				<p>
					이 웹사이트가 궁금하시면
					<b>about:page</b>를 클릭해주세요.
				</p>
			</Box>
		</div>

		<Section title="진행 중인 개인 프로젝트들">
			{#each projects as project, index}
				<SectionItem isFirst={index === 0} isLast={index === projects.length - 1}>
					<div class="flex w-full flex-row justify-between py-2">
						<p>{project.name}</p>

						<div class="flex flex-row gap-1">
							<IconButton component={Home} href="https://github.com/byron1st/my-app" />
						</div>
					</div>
				</SectionItem>
			{/each}
		</Section>

		<Box class="w-full">
			<a class="flex w-full flex-row justify-between px-4 py-2" href="/about#projects">
				<p>회사 프로젝트 보기</p>

				<ChevronRight class="h-5 w-5" />
			</a>
		</Box>
	</div>
</main>

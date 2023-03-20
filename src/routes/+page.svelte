<script lang="ts">
	import Section from '$lib/component/About/Section.svelte';
	import SectionItem from '$lib/component/About/SectionItem.svelte';
	import Box from '$lib/component/Box.svelte';
	import IconButton from '$lib/component/IconButton.svelte';
	import BuildingOffice from '$lib/icons/BuildingOffice.svelte';
	import ChevronRight from '$lib/icons/ChevronRight.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
	import Home from '$lib/icons/Home.svelte';
	import User from '$lib/icons/User.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	$: projects = data.props.projects;
</script>

<main class="flex w-full flex-col items-center">
	<div class="flex flex-col items-center gap-4 py-20">
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
					<a href="/site"><b>about:site</b></a>를 클릭해주세요.
				</p>
			</Box>
		</div>

		<Section title="진행 중인 프로젝트들">
			{#each projects as project, index}
				<SectionItem isFirst={index === 0} isLast={index === projects.length - 1}>
					<div class="flex w-full flex-row justify-between py-2">
						<div class="flex flex-row items-center gap-2">
							{#if project.isPersonal}
								<User class="h-5 w-5" />
							{:else}
								<BuildingOffice class="h-5 w-5" />
							{/if}
							<p>{project.name}</p>
						</div>

						<div class="flex flex-row gap-4">
							{#if project.link}
								<IconButton
									component={project.link.startsWith('https://github.com') ? GitHub : Home}
									href={project.link}
								/>
							{/if}
							<IconButton
								component={ChevronRight}
								href={project.isPersonal
									? `/projects#${project._id}`
									: `/about#projects-${project._id}`}
								openCurrentTab
							/>
						</div>
					</div>
				</SectionItem>
			{/each}
		</Section>
	</div>
</main>

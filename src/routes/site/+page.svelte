<script lang="ts">
	import ExternalLinkButton from '$lib/component/core/buttons/ExternalLinkButton.svelte';
	import Box from '$lib/component/core/Box.svelte';
	import TextAttr from '$lib/component/core/List/attrs/TextAttr.svelte';
	import List from '$lib/component/core/List/List.svelte';
	import ListItem from '$lib/component/core/List/ListItem.svelte';
	import LoadingError from '$lib/component/LoadingError.svelte';
	import SkeletonListItems from '$lib/component/core/List/SkeletonListItems.svelte';
	import type { PageServerData } from './$types';
	import { ExternalLink } from 'lucide-svelte';

	export let data: PageServerData;
</script>

<svelte:head>
	<meta
		name="description"
		content="Description about the purpose and tech stacks of Hwi's Website"
	/>
</svelte:head>

<div class="flex w-full flex-col items-center">
	<div class="w-max-md flex flex-col items-center gap-6 sm:py-20">
		<div class="flex flex-row items-center gap-2 pt-6 sm:pt-0">
			<h1 class="text-2xl font-bold">Hwi's Website</h1>
		</div>

		<Box class="flex flex-col px-4 py-2">
			<p>
				이 웹사이트는 저의 이력과 프로젝트들을 제가 원하는 방식으로 자유롭게 정리하기 위해
				만들었습니다.
			</p>
			<p>
				나만의 디지털 공간 같은 느낌으로 만들었고, 앞으로 다양한 섹션을 추가할 "계획"을 갖고
				있습니다.
			</p>
			<p>오랜 기간 유지되길 기원합니다.</p>

			<div class="mt-1 flex justify-end">
				<div>
					<ExternalLinkButton
						social="GitHub"
						link="https://github.com/byron1st/my-app"
						account="byron1st/my-app"
					/>
				</div>
			</div>
		</Box>

		<List title="주요 기술 스택">
			{#await data.stacks.streamed}
				<SkeletonListItems />
			{:then stacks}
				{#each stacks as techStack, index}
					<ListItem title={techStack.name} length={stacks.length} {index} href={techStack.link}>
						<TextAttr text={techStack.stack} slot="attributes" />
						<ExternalLink size={20} slot="leftItem" />
					</ListItem>
				{/each}
			{:catch error}
				<LoadingError {error} />
			{/await}
		</List>
	</div>
</div>

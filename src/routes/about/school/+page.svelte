<script lang="ts">
	import ArrowTopRightOnSquare from '$lib/icons/ArrowTopRightOnSquare.svelte';
	import EducationAttrs from '$lib/component/core/List/attrs/EducationAttrs.svelte';
	import PaperAttrs from '$lib/component/core/List/attrs/PaperAttrs.svelte';
	import List from '$lib/component/core/List/List.svelte';
	import ListItem from '$lib/component/core/List/ListItem.svelte';
	import LoadingError from '$lib/component/LoadingError.svelte';
	import SkeletonListItems from '$lib/component/core/List/SkeletonListItems.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="flex w-full flex-col gap-6">
	<List title="학력">
		{#await data.educations.streamed}
			<SkeletonListItems />
		{:then educations}
			{#each educations as { degree, school, from, to, note, link }, index}
				<ListItem
					title={school}
					kind={degree}
					href={link}
					length={educations.length}
					{index}
					leftIcon={link ? ArrowTopRightOnSquare : undefined}
				>
					<EducationAttrs {from} {to} {note} slot="attributes" />
				</ListItem>
			{/each}
		{:catch error}
			<LoadingError {error} />
		{/await}
	</List>

	{#await data.papers.streamed}
		<List title="논문 (1저자)">
			<SkeletonListItems />
		</List>

		<List title="논문 (기타)">
			<SkeletonListItems />
		</List>
	{:then papers}
		<List title="논문 (1저자)">
			{#each papers.myPapers as { title, authors, conference, journal, link }, index}
				<ListItem
					kind={conference ? '학회' : journal ? '저널' : ''}
					{title}
					href={link}
					length={papers.myPapers.length}
					{index}
					leftIcon={ArrowTopRightOnSquare}
				>
					<PaperAttrs {authors} {conference} {journal} slot="attributes" />
				</ListItem>
			{/each}
		</List>

		<List title="논문 (기타)"
			>{#each papers.otherPapers as { title, authors, conference, journal, link }, index}
				<ListItem
					{title}
					kind={conference ? '학회' : journal ? '저널' : ''}
					href={link}
					length={papers.otherPapers.length}
					{index}
					leftIcon={ArrowTopRightOnSquare}
				>
					<PaperAttrs {authors} {conference} {journal} slot="attributes" />
				</ListItem>
			{/each}
		</List>
	{:catch error}
		<List title="논문 (1저자)">
			<LoadingError {error} />
		</List>

		<List title="논문 (기타)">
			<LoadingError {error} />
		</List>
	{/await}
</div>

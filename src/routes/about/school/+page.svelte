<script lang="ts">
	import ArrowTopRightOnSquare from '$lib/icons/ArrowTopRightOnSquare.svelte';
	import EducationAttrs from '$lib/component/core/List/attrs/EducationAttrs.svelte';
	import PaperAttrs from '$lib/component/core/List/attrs/PaperAttrs.svelte';
	import List from '$lib/component/core/List/List.svelte';
	import ListItem from '$lib/component/core/List/ListItem.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	$: educations = data.props.educations;
	$: myPapers = data.props.myPapers;
	$: otherPapers = data.props.otherPapers;
</script>

<div class="flex w-full flex-col gap-6">
	<List title="학력">
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
	</List>

	<List title={`논문 (1저자): ${myPapers.length}편`}>
		{#each myPapers as { title, authors, conference, journal, link }, index}
			<ListItem
				kind={conference ? '학회' : journal ? '저널' : ''}
				{title}
				href={link}
				length={myPapers.length}
				{index}
				leftIcon={ArrowTopRightOnSquare}
			>
				<PaperAttrs {authors} {conference} {journal} slot="attributes" />
			</ListItem>
		{/each}
	</List>

	<List title={`논문 (기타): ${otherPapers.length}편`}>
		{#each otherPapers as { title, authors, conference, journal, link }, index}
			<ListItem
				{title}
				kind={conference ? '학회' : journal ? '저널' : ''}
				href={link}
				length={myPapers.length}
				{index}
				leftIcon={ArrowTopRightOnSquare}
			>
				<PaperAttrs {authors} {conference} {journal} slot="attributes" />
			</ListItem>
		{/each}
	</List>
</div>

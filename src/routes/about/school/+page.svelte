<script lang="ts">
	import EducationItem from '$lib/component/About/EducationItem.svelte';
	import PaperItem from '$lib/component/About/PaperItem.svelte';
	import Section from '$lib/component/About/Section.svelte';
	import SectionItem from '$lib/component/About/SectionItem.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	$: educations = data.props.educations;
	$: myPapers = data.props.myPapers;
	$: otherPapers = data.props.otherPapers;
</script>

<div class="flex w-full flex-col gap-6">
	<Section title="학력">
		{#each educations as { degree, school, from, to, note, link }, index}
			<SectionItem
				title={degree}
				href={link}
				isFirst={index === 0}
				isLast={index === educations.length - 1}
			>
				<EducationItem text={school} {from} {to} {link} subText={note} />
			</SectionItem>
		{/each}
	</Section>

	<Section title={`논문 (1저자): ${myPapers.length}편`}>
		{#each myPapers as { title, authors, conference, journal, link }, index}
			<SectionItem
				title={conference ? '학회' : journal ? '저널' : ''}
				href={link}
				isFirst={index === 0}
				isLast={index === myPapers.length - 1}
			>
				<PaperItem {title} {authors} {conference} {journal} />
			</SectionItem>
		{/each}
	</Section>

	<Section title={`논문 (기타): ${otherPapers.length}편`}>
		{#each otherPapers as { title, authors, conference, journal, link }, index}
			<SectionItem
				title={conference ? '학회' : journal ? '저널' : ''}
				href={link}
				isFirst={index === 0}
				isLast={index === otherPapers.length - 1}
			>
				<PaperItem {title} {authors} {conference} {journal} />
			</SectionItem>
		{/each}
	</Section>
</div>

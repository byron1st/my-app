<script lang="ts">
	import EducationItem from '$lib/component/About/EducationItem.svelte';
	import Section from '$lib/component/About/Section.svelte';
	import SectionItem from '$lib/component/About/SectionItem.svelte';

	type EducationType = {
		degree: string;
		school: string;
		from: Date;
		to?: Date;
		note?: string;
	};

	let educations: EducationType[] = [
		{
			degree: '박사',
			school: 'KAIST, 전산학부, Software Architecture Lab',
			from: new Date('2012-03-01')
		},
		{
			degree: '석사',
			school: 'KAIST, 소프트웨어공학프로그램 학과',
			from: new Date('2010-09-01'),
			to: new Date('2012-02-28'),
			note: 'KAIST-CMU MSIT-SE 공동학위 프로그램'
		},
		{
			degree: '석사',
			school: 'Carnegie Mellon University, MSIT-SE',
			from: new Date('2010-09-01'),
			to: new Date('2012-02-28'),
			note: 'KAIST-CMU MSIT-SE 공동학위 프로그램'
		},
		{
			degree: '학사',
			school: 'KAIST, 전산학과',
			from: new Date('2005-02-01'),
			to: new Date('2010-08-31')
		}
	];
</script>

<div class="flex w-full flex-col">
	<Section title="학력">
		{#each educations as { degree, school, from, to, note }, index}
			<SectionItem title={degree} isLast={index === educations.length - 1}>
				<EducationItem text={school} {from} {to} subText={note} />
			</SectionItem>
		{/each}
	</Section>
</div>

<script lang="ts">
	import CareerItem from '$lib/component/About/CareerItem.svelte';
	import Section from '$lib/component/About/Section.svelte';
	import SectionItem from '$lib/component/About/SectionItem.svelte';
	import SkillItem from '$lib/component/About/SkillItem.svelte';
	// 경력
	// 기술 (클릭해서 모달로 자세한 설명 띄우기. 관련 프로젝트/강의 reference 포함)
	// 회사 프로젝트
	// 개인 프로젝트
	// 강의

	type SkillType = {
		type: 'language' | 'framework' | 'platform' | 'domain';
		skill: string;
		skillLevel: number;
	};

	const skills: SkillType[] = [
		{ type: 'language', skill: 'Go', skillLevel: 10 },
		{ type: 'language', skill: 'JavaScript/TypeScript', skillLevel: 10 },
		{ type: 'language', skill: 'Solidity', skillLevel: 4 },
		{ type: 'language', skill: 'Java', skillLevel: 5 },
		{ type: 'framework', skill: 'React', skillLevel: 10 },
		{ type: 'framework', skill: 'ReactNative', skillLevel: 5 },
		{ type: 'framework', skill: 'Next.js', skillLevel: 10 },
		{ type: 'framework', skill: 'Fastify', skillLevel: 8 },
		{ type: 'framework', skill: 'Fiber', skillLevel: 10 },
		{ type: 'framework', skill: 'Gin', skillLevel: 7 },
		{ type: 'framework', skill: 'Hyperledger Fabric', skillLevel: 10 },
		{ type: 'framework', skill: 'Prisma', skillLevel: 5 },
		{ type: 'framework', skill: 'Svelte', skillLevel: 5 },
		{ type: 'framework', skill: 'SvelteKit', skillLevel: 5 },
		{ type: 'platform', skill: 'MongoDB/MongoDB Atlas', skillLevel: 8 },
		{ type: 'platform', skill: 'Firebase', skillLevel: 5 },
		{ type: 'platform', skill: 'Ethereum', skillLevel: 5 },
		{ type: 'platform', skill: 'Google Cloud Platform', skillLevel: 5 },
		{ type: 'platform', skill: 'Docker', skillLevel: 7 },
		{ type: 'domain', skill: 'Private Blockchain', skillLevel: 8 }
	].sort((a, b) => b.skillLevel - a.skillLevel);

	const priorSkills = skills.filter((skill) => skill.skillLevel >= 8);

	function getSkillTypeLabel(type: SkillType['type']) {
		switch (type) {
			case 'language':
				return '언어';
			case 'framework':
				return '프레임워크';
			case 'platform':
				return '플랫폼';
			case 'domain':
				return '도메인';
		}
	}
</script>

<div class="flex w-full flex-col gap-6">
	<Section title="경력">
		<SectionItem href="https://bigpicturelabs.io" isFirst isLast>
			<CareerItem work="빅픽처랩(주)" position="CTO, 풀스텍 개발자" from={new Date('2018-05-01')} />
		</SectionItem>
	</Section>

	<Section title="기술">
		{#each priorSkills as { type, skill }, index}
			<SectionItem
				title={getSkillTypeLabel(type)}
				isFirst={index === 0}
				isLast={index === priorSkills.length - 1}
			>
				<SkillItem {skill} />
			</SectionItem>
		{/each}
	</Section>
</div>

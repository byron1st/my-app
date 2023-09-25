<script lang="ts">
	import ProjectInfoItem from '$lib/component/Project/ProjectInfoItem.svelte';
	import ProjectRepoItem from '$lib/component/Project/ProjectRepoItem.svelte';
	import ProjectStatusBadge from '$lib/component/Project/ProjectStatusBadge.svelte';
	import { getDuration } from '$lib/date';
	import { ProjectKind, type ProjectWithSkillRepoSerialized } from '$lib/models/projects';
	import { Play } from 'lucide-svelte';

	export let project: ProjectWithSkillRepoSerialized;
</script>

<div class="flex flex-col p-2 gap-8">
	<div>
		<ProjectStatusBadge status={project.status} />
		<h1 class="font-black text-4xl">{project.name}</h1>
	</div>
	<p class="font-light">{project.overview}</p>

	<div class="flex flex-col">
		<ProjectInfoItem
			label="프로젝트 종류"
			value={project.kind === ProjectKind.WORK
				? '회사 프로젝트'
				: project.kind === ProjectKind.EDUCATION
				? '연구 프로젝트'
				: '개인 프로젝트'}
		/>
		<ProjectInfoItem label="수행 기간" value={getDuration(project.from, project.to, 'YYYY-MM')} />
		<ProjectInfoItem label="수행 역할" value={project.role} />
		<ProjectInfoItem
			label="팀 구성"
			value={project.team}
			description="본인 포함하여, 동시에 존재했던 팀원 숫자를 의미합니다."
		/>
		<ProjectInfoItem
			label="코드 규모"
			value={`${project.size}K`}
			description="본인이 담당한 부분의 코드 라인 수를 의미합니다."
		/>

		{#if project.repos}
			<div class="flex flex-col border-t border-t-slate-a6">
				<p class="text-sm font-bold mt-1">코드저장소</p>
				{#each project.repoInfo as repo}
					<ProjectRepoItem {repo} />
				{/each}
			</div>
		{/if}
	</div>
</div>

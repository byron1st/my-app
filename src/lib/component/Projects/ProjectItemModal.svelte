<script lang="ts">
	import classnames from 'classnames';
	import dayjs from 'dayjs';
	import { getDuration } from '$lib/date';
	import type { ProjectWithSkillRepoSerialized } from '$lib/models/projects';
	import GitHub from '$lib/icons/GitHub.svelte';
	import Modal from '$lib/component/Modal.svelte';
	import Button from '$lib/component/Button.svelte';
	import LabelAndValue from '$lib/component/LabelAndValue.svelte';
	import LabelAndDescription from '$lib/component/LabelAndDescription.svelte';
	import LabelAndLink from '$lib/component/LabelAndLink.svelte';
	import Section from '$lib/component/Projects/Section.svelte';

	export let project: ProjectWithSkillRepoSerialized;
	export let show = false;
	export let onClose: () => void;
</script>

{#if show}
	<Modal title={project.name} {onClose}>
		<div class="flex flex-col gap-2">
			<LabelAndValue label="수행 기간" value={getDuration(project.from, project.to, 'YYYY-MM')} />
			<LabelAndValue label="수행 역할" value={project.role} />
			<LabelAndValue
				label="팀 구성"
				value={project.team}
				description="본인 포함하여, 동시에 존재했던 팀원 숫자를 의미합니다."
			/>
			<LabelAndValue
				label="코드 규모"
				value={`${project.size}K`}
				description="본인이 담당한 부분의 코드 라인 수를 의미합니다."
			/>
			<LabelAndDescription
				label="설명"
				description={project.description ? project.description : '\n'}
			/>

			<Section title="기술">
				{#each project.skills as skill, index}
					<div
						class={classnames('flex w-full flex-row justify-between py-2 px-4', {
							'border-b border-b-slate-800/10 dark:border-b-slate-100/10':
								index !== project.skills.length - 1
						})}
					>
						<p class="text-sm text-slate-800/50 dark:text-slate-100/50">{skill.skill}</p>
						<p class="text-end text-sm text-slate-800/50 dark:text-slate-100/50">
							{skill.level}/10
						</p>
					</div>
				{/each}
			</Section>

			{#if project.repoInfo && project.repoInfo.length > 0}
				<Section title="코드저장소">
					{#each project.repoInfo as repo, index}
						<a
							class={classnames(
								'flex w-full flex-col py-2 px-4 active:bg-slate-300 dark:active:bg-slate-600',
								{
									'border-b border-b-slate-800/10 dark:border-b-slate-100/10':
										index !== project.repoInfo.length - 1
								}
							)}
							href={repo.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<div class="flex flex-row items-center justify-between">
								<p class="text-sm">{repo.name}</p>
								<GitHub class="h-5 w-5" />
							</div>

							<p class="text-xs text-slate-800/50 dark:text-slate-100/50">
								{repo.visibility === 'private' ? '비공개' : '공개'}, {repo.language}{repo.license
									? `, ${repo.license.name}`
									: ''}, {dayjs(repo.pushedAt).format('YYYY-MM-DD')}
							</p>
						</a>
					{/each}
				</Section>
			{/if}

			{#if project.link}
				<LabelAndLink label="링크" href={project.link} />
			{/if}
		</div>

		<div class="flex h-full flex-row items-center justify-end" slot="footer" let:close>
			<Button title="완료" onClick={close} color="primary" />
		</div>
	</Modal>
{/if}

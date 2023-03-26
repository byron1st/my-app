<script lang="ts">
	import classnames from 'classnames';
	import dayjs from 'dayjs';
	import { getDuration } from '$lib/date';
	import type { ProjectWithSkillRepoSerialized } from '$lib/models/projects';
	import GitHub from '$lib/icons/GitHub.svelte';
	import Modal from '$lib/component/core/Modal.svelte';
	import Button from '$lib/component/core/buttons/Button.svelte';
	import Description from '$lib/component/core/Description/Description.svelte';
	import MultilineDescription from '$lib/component/core/Description/MultilineDescription.svelte';
	import List from '$lib/component/core/List/List.svelte';
	import ListItem from '$lib/component/core/List/ListItem.svelte';

	export let project: ProjectWithSkillRepoSerialized;
	export let show = false;
	export let onClose: () => void;
</script>

{#if show}
	<Modal title={project.name} {onClose}>
		<div class="flex flex-col gap-2">
			<Description label="수행 기간" value={getDuration(project.from, project.to, 'YYYY-MM')} />
			<Description label="수행 역할" value={project.role} />
			<Description
				label="팀 구성"
				value={project.team}
				description="본인 포함하여, 동시에 존재했던 팀원 숫자를 의미합니다."
			/>
			<Description
				label="코드 규모"
				value={`${project.size}K`}
				description="본인이 담당한 부분의 코드 라인 수를 의미합니다."
			/>
			<MultilineDescription
				label="설명"
				description={project.description ? project.description : '\n'}
			/>

			<List title="기술">
				{#each project.skills as skill, index}
					<ListItem length={project.skills.length} {index}>
						<p class="text-sm text-slate-800/50 dark:text-slate-100/50" slot="content">
							{skill.skill}
						</p>

						<p class="text-end text-sm text-slate-800/50 dark:text-slate-100/50" slot="leftItem">
							{skill.level}/10
						</p>
					</ListItem>
				{/each}
			</List>

			{#if project.repoInfo && project.repoInfo.length > 0}
				<List title="코드저장소">
					{#each project.repoInfo as repo, index}
						<ListItem length={project.repoInfo.length} {index} href={repo.url} leftIcon={GitHub}>
							<div class="flex flex-col" slot="content">
								<p class="text-sm">{repo.name}</p>
								<p class="text-xs text-slate-800/50 dark:text-slate-100/50">
									{repo.visibility === 'private' ? '비공개' : '공개'}, {repo.language}{repo.license
										? `, ${repo.license.name}`
										: ''}, {dayjs(repo.pushedAt).format('YYYY-MM-DD')}
								</p>
							</div>
						</ListItem>
					{/each}
				</List>
			{/if}

			{#if project.link}
				<Description label="링크" value={project.link} isLink />
			{/if}
		</div>

		<div class="flex h-full flex-row items-center justify-end" slot="footer" let:close>
			<Button title="완료" onClick={close} color="primary" />
		</div>
	</Modal>
{/if}

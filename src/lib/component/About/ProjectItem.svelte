<script lang="ts">
	import { getDuration } from '$lib/date';
	import type { ProjectSerialized } from '$lib/models/projects';
	import BuildingOffice from '$lib/icons/BuildingOffice.svelte';
	import User from '$lib/icons/User.svelte';
	import UserCircle from '$lib/icons/UserCircle.svelte';
	import Users from '$lib/icons/Users.svelte';
	import Duration from '$lib/component/About/Duration.svelte';
	import Box from '$lib/component/Box.svelte';
	import Modal from '$lib/component/Modal.svelte';
	import Button from '$lib/component/Button.svelte';
	import LabelAndValue from '$lib/component/LabelAndValue.svelte';
	import LabelAndDescription from '$lib/component/LabelAndDescription.svelte';

	export let project: ProjectSerialized;

	let show = false;

	$: isFinished = Boolean(project.to);
</script>

<Box class={isFinished ? 'text-slate-800/50 dark:text-slate-100/50' : ''} enableClick>
	<button
		class="flex w-full flex-row justify-between px-4 py-3 text-start"
		on:click={() => (show = true)}
	>
		<div class="flex w-full flex-col gap-2">
			<div>
				<p class="leading-none">
					{project.name}
					{#if isFinished}<span class="text-xs">(종료)</span>{/if}
				</p>
				<p class="text-xs text-slate-800/50 dark:text-slate-100/50">
					{project.overview}
				</p>
			</div>

			<div>
				<Duration from={project.from} to={project.to} format="YYYY-MM" />
				<div class="flex flex-row items-center gap-1">
					<UserCircle class="h-3 w-3" />
					<p class="text-xs">{project.role}</p>
				</div>
				<div class="flex flex-row items-center gap-1">
					<Users class="h-3 w-3" />
					<p class="text-xs">{project.team}</p>
				</div>
			</div>

			<div class="flex flex-row flex-wrap gap-1">
				{#each project.tags as tag}
					<div class="rounded-lg bg-slate-200 py-1 px-1 text-xs dark:bg-slate-700">#{tag}</div>
				{/each}
			</div>
		</div>

		<div class="flex shrink-0 flex-row justify-end">
			{#if project.isPersonal}
				<User class="h-5 w-5" />
			{:else}
				<BuildingOffice class="h-5 w-5" />
			{/if}
		</div>
	</button>
</Box>

{#if show}
	<Modal title={project.name} onClose={() => (show = false)}>
		<div class="flex flex-col gap-2">
			<LabelAndValue label="수행 기간" value={getDuration(project.from, project.to, 'YYYY-MM')} />
			<LabelAndValue label="수행 역할" value={project.role} />
			<LabelAndValue
				label="팀 구성"
				value={project.team}
				description="본인 포함하여, 동시에 존재했던 팀원 숫자를 의미합니다."
			/>
			<LabelAndDescription
				label="설명"
				description={project.description ? project.description : '\n'}
			/>
		</div>

		<div class="flex h-full flex-row items-center justify-end" slot="footer" let:close>
			<Button title="완료" onClick={close} color="primary" />
		</div>
	</Modal>
{/if}

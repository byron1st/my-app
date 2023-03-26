<script lang="ts">
	import classnames from 'classnames';
	import {
		ProjectKind,
		ProjectStatus,
		type ProjectWithSkillRepoSerialized
	} from '$lib/models/projects';
	import BuildingOffice from '$lib/icons/BuildingOffice.svelte';
	import Home from '$lib/icons/Home.svelte';
	import AcademicCap from '$lib/icons/AcademicCap.svelte';
	import Play from '$lib/icons/Play.svelte';
	import Pause from '$lib/icons/Pause.svelte';
	import Stop from '$lib/icons/Stop.svelte';
	import ProjectItemContent from '$lib/component/Projects/ProjectItemContent.svelte';
	import ProjectItemModal from '$lib/component/Projects/ProjectItemModal.svelte';
	import Icon from '$lib/component/core/Icon.svelte';

	export let project: ProjectWithSkillRepoSerialized;
	$: isStopped = project.status !== ProjectStatus.ONGOING;

	let show = false;
</script>

<button
	id={project._id}
	class={classnames(
		'flex w-full flex-row justify-between border-b border-b-slate-800/10 p-4 text-start hover:bg-slate-100 active:bg-slate-200 dark:border-b-slate-100/10 dark:hover:bg-slate-800 dark:active:bg-slate-700',
		{
			'text-slate-800/50 dark:text-slate-100/50': isStopped
		}
	)}
	on:click={() => (show = true)}
>
	<div class="flex flex-row">
		<div class="flex w-10 shrink-0 flex-row items-center">
			{#if project.status === ProjectStatus.ONGOING}
				<Icon icon={Play} class="shrink-0" />
			{:else if project.status === ProjectStatus.HOLD}
				<Icon icon={Pause} class="shrink-0" />
			{:else}
				<Icon icon={Stop} class="shrink-0" />
			{/if}
		</div>

		<ProjectItemContent {project} />
	</div>

	<div class="shrink-0">
		{#if project.kind === ProjectKind.WORK}
			<Icon icon={BuildingOffice} size="lg" />
		{:else if project.kind === ProjectKind.PERSONAL}
			<Icon icon={Home} size="lg" />
		{:else}
			<Icon icon={AcademicCap} size="lg" />
		{/if}
	</div>
</button>

<ProjectItemModal {project} {show} onClose={() => (show = false)} />

<script lang="ts">
	import {
		ProjectKind,
		ProjectStatus,
		type ProjectWithSkillRepoSerialized
	} from '$lib/models/projects';
	import ProjectItemContent from '$lib/component/Projects/ProjectItemContent.svelte';
	import ProjectItemModal from '$lib/component/Projects/ProjectItemModal.svelte';
	import { Building, GraduationCap, Home, Pause, Play, Square } from 'lucide-svelte';

	export let project: ProjectWithSkillRepoSerialized;

	let show = false;
</script>

<button
	id={project._id}
	class="flex w-full flex-row justify-between border-b border-b-slate-a6 p-4 text-start hover:bg-slate-a4 active:bg-slate-a5"
	on:click={() => (show = true)}
>
	<div class="flex flex-row">
		<div class="flex w-10 shrink-0 flex-row items-center">
			{#if project.status === ProjectStatus.ONGOING}
				<Play size={20} />
			{:else if project.status === ProjectStatus.HOLD}
				<Pause size={20} />
			{:else}
				<Square size={20} />
			{/if}
		</div>

		<ProjectItemContent {project} />
	</div>

	<div class="shrink-0">
		{#if project.kind === ProjectKind.WORK}
			<Building />
		{:else if project.kind === ProjectKind.PERSONAL}
			<Home />
		{:else}
			<GraduationCap />
		{/if}
	</div>
</button>

<ProjectItemModal {project} {show} onClose={() => (show = false)} />

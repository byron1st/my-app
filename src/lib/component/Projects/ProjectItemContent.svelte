<script lang="ts">
	import { ProjectKind, type ProjectWithSkillSerialized } from '$lib/models/projects';
	import DurationAttr from '$lib/component/core/List/attrs/DurationAttr.svelte';
	import Tag from '$lib/component/core/Tag.svelte';
	import TextAttr from '$lib/component/core/List/attrs/TextAttr.svelte';
	import { Briefcase, Building, Users } from 'lucide-svelte';

	export let project: ProjectWithSkillSerialized;
</script>

<div class="flex flex-col">
	<div class="flex flex-row items-baseline gap-1 font-bold">
		{project.name}
	</div>

	<TextAttr text={project.overview} />

	<DurationAttr from={project.from} to={project.to} format="YYYY-MM-DD" />

	{#if project.kind === ProjectKind.WORK}
		<div class="flex shrink-0 flex-row items-center gap-1">
			<Building size={12} />
			<p class="text-xs">{project.client ?? '빅픽처랩(주)'}</p>
		</div>

		<div class="flex flex-row flex-wrap items-center">
			<div class="mr-2 flex shrink-0 flex-row items-center gap-1">
				<Briefcase size={12} />
				<p class="text-xs">{project.role}</p>
			</div>
			<div class="flex shrink-0 flex-row items-center gap-1">
				<Users size={12} />
				<p class="text-xs">{project.team}</p>
			</div>
		</div>
	{/if}

	<div class="mt-2 flex flex-row flex-wrap gap-1">
		{#each project.tags as tag}
			<Tag {tag} />
		{/each}
	</div>
</div>

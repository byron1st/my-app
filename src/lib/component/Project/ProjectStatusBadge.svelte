<script lang="ts">
	import { ProjectStatus } from '$lib/models/projects';
	import classNames from 'classnames';
	import { Pause, Play, Square } from 'lucide-svelte';

	export let status: ProjectStatus;
</script>

<div
	class={classNames(
		'rounded text-xs px-2 py-1 w-fit h-fit flex flex-row gap-1 items-center shrink-0 font-bold',
		{
			'bg-jade-a3 text-jade-a11': status === ProjectStatus.ONGOING,
			'bg-amber-a3 text-amber-a11': status === ProjectStatus.HOLD,
			'bg-gray-a3 text-gray-a11': status === ProjectStatus.FINISHED
		}
	)}
>
	{#if status === ProjectStatus.ONGOING}
		<Play size={12} />In Progress
	{:else if status === ProjectStatus.HOLD}
		<Pause size={12} />Hold
	{:else}
		<Square size={12} />Finished
	{/if}
</div>

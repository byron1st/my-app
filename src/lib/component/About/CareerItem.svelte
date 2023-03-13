<script lang="ts">
	import dayjs from 'dayjs';
	import Briefcase from '$lib/icons/Briefcase.svelte';
	import CalendarDays from '$lib/icons/CalendarDays.svelte';
	import classnames from 'classnames';

	export let work: string;
	export let position: string;
	export let link: string;
	export let from: Date;
	export let to: Date | undefined = undefined;
	export let isLast = false;

	$: duration = `${dayjs(from).format('YYYY-MM-DD')} - ${
		to ? dayjs(to).format('YYYY-MM-DD') : 'Present'
	}`;
</script>

<div class="flex flex-row items-center">
	<div
		class={classnames('h-full flex-1', {
			'border-b border-b-slate-800/30 dark:border-b-slate-50/30': !isLast
		})}
	>
		<div class="flex flex-col py-2">
			<a class="underline" href={link} target="_blank" rel="noreferrer">{work}</a>
			<div class="flex flex-row items-center gap-1">
				<Briefcase class="h-3 w-3" />
				<p class="text-xs">{position}</p>
			</div>
			<div class="flex flex-row items-center gap-1">
				<CalendarDays class="h-3 w-3" />
				<p class="text-xs">{duration}</p>
			</div>
		</div>
	</div>
</div>

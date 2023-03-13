<script lang="ts">
	import dayjs from 'dayjs';
	import Briefcase from '$lib/icons/Briefcase.svelte';
	import CalendarDays from '$lib/icons/CalendarDays.svelte';

	export let work: string;
	export let position: string;
	export let from: Date;
	export let to: Date | undefined = undefined;

	$: duration = `${dayjs(from).format('YYYY-MM-DD')} - ${
		to ? dayjs(to).format('YYYY-MM-DD') : 'Present'
	}`;
</script>

<div class="flex flex-col py-2">
	<p>{work}</p>
	<div class="flex flex-row items-center gap-1">
		<Briefcase class="h-3 w-3" />
		<p class="text-xs">{position}</p>
	</div>
	<div class="flex flex-row items-center gap-1">
		<CalendarDays class="h-3 w-3" />
		<p class="text-xs">{duration}</p>
	</div>
</div>

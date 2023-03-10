<script lang="ts">
	import dayjs from 'dayjs';
	import CalendarDays from '$lib/icons/CalendarDays.svelte';

	export let text = '';
	export let subText = '';
	export let from: Date;
	export let to: Date | undefined = undefined;

	$: duration = to
		? `${dayjs(from).format('YYYY-MM-DD')} - ${dayjs(to).format('YYYY-MM-DD')}`
		: `${dayjs(from).format('YYYY-MM-DD')} - Present`;
</script>

<div class="flex flex-col py-2">
	<p>{text}</p>
	<div class="flex flex-row items-center gap-1">
		<CalendarDays size="xs" />
		<p class="text-xs">{duration}</p>
	</div>

	{#if subText}
		<p class="text-xs text-slate-800/50 dark:text-slate-100/50">
			{subText}
		</p>
	{/if}
</div>

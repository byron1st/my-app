<script lang="ts">
	import dayjs from 'dayjs';
	import CalendarDays from '$lib/icons/CalendarDays.svelte';
	import Link from '$lib/icons/Link.svelte';
	import ArrowTopRightOnSquare from '$lib/icons/ArrowTopRightOnSquare.svelte';

	export let text = '';
	export let subText = '';
	export let from: Date;
	export let to: Date | undefined = undefined;
	export let link: string | undefined = undefined;

	$: duration = `${dayjs(from).format('YYYY-MM-DD')} - ${
		to ? dayjs(to).format('YYYY-MM-DD') : 'Present'
	}`;
</script>

<div class="flex w-full flex-col sm:flex-row sm:items-center sm:justify-between">
	<div class="flex flex-col py-2">
		{#if link}
			<a class="flex flex-row items-baseline gap-1 underline" href={link}
				>{text}<ArrowTopRightOnSquare class="hidden h-3 w-3 shrink-0 sm:flex" /></a
			>
		{:else}
			<p>{text}</p>
		{/if}

		<div class="flex flex-row items-center gap-1">
			<CalendarDays class="h-3 w-3" />
			<p class="text-xs">{duration}</p>
		</div>

		{#if subText}
			<p class="text-xs text-slate-800/50 dark:text-slate-100/50">
				{subText}
			</p>
		{/if}
	</div>
</div>

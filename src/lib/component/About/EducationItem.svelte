<script lang="ts">
	import dayjs from 'dayjs';
	import CalendarDays from '$lib/icons/CalendarDays.svelte';
	import Link from '$lib/icons/Link.svelte';

	export let text = '';
	export let subText = '';
	export let from: Date;
	export let to: Date | undefined = undefined;
	export let link: string | undefined = undefined;

	$: duration = `${dayjs(from).format('YYYY-MM-DD')} - ${
		to ? dayjs(to).format('YYYY-MM-DD') : 'Present'
	}`;
</script>

<div class="flex w-full flex-row items-center justify-between">
	<div class="flex flex-col py-2">
		<p>{text}</p>
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

	{#if link}
		<a
			class="rounded-full p-1 hover:bg-slate-200 dark:hover:border-slate-400"
			href={link}
			target="_blank"
			rel="noopener noreferrer"
		>
			<Link class="h-6 w-6" />
		</a>
	{/if}
</div>

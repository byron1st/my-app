<script lang="ts">
	import Link from '$lib/icons/Link.svelte';
	import CalendarDays from '$lib/icons/CalendarDays.svelte';
	import MapPin from '$lib/icons/MapPin.svelte';
	import UserGroup from '$lib/icons/UserGroup.svelte';

	export let title: string;
	export let authors: string[];
	export let link: string;
	export let conference: { title: string; location: string; date: string } | undefined = undefined;
	export let journal: { title: string; volume: string; pages: string; date: string } | undefined =
		undefined;

	$: date = conference?.date || journal?.date;
	$: subText = conference
		? conference.title
		: journal
		? `${journal.title}, ${journal.volume}, pp.${journal.pages}`
		: '';
</script>

<div class="flex w-full flex-col sm:flex-row sm:items-center sm:justify-between">
	<div class="flex flex-col py-2">
		<p>{title}</p>
		<p class="text-xs">{subText}</p>
		<div class="flex flex-row items-center gap-1">
			<UserGroup class="h-3 w-3" />
			<p class="text-xs">
				{#each authors as author, index}
					{#if author === 'Hwi Ahn' || author === '안휘'}
						<span class="font-bold text-blue-600 dark:text-blue-300">{author}</span>
					{:else}
						{author}
					{/if}
					{index !== authors.length - 1 ? ', ' : ''}
				{/each}
			</p>
		</div>

		<div class="flex flex-row items-center gap-1">
			<CalendarDays class="h-3 w-3" />
			<p class="mr-1 text-xs">{date}</p>

			{#if conference}
				<MapPin class="h-3 w-3" />
				<p class="text-xs">{conference.location}</p>
			{/if}
		</div>
	</div>

	<div class="flex flex-row justify-end">
		<a
			class="flex h-6 w-6 flex-row items-center justify-center rounded-full p-1 hover:bg-slate-200 dark:hover:border-slate-400"
			href={link}
			target="_blank"
			rel="noopener noreferrer"
		>
			<Link class="h-4 w-4" />
		</a>
	</div>
</div>

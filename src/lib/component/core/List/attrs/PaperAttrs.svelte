<script lang="ts">
	import CalendarDays from '$lib/icons/CalendarDays.svelte';
	import MapPin from '$lib/icons/MapPin.svelte';
	import Users from '$lib/icons/Users.svelte';

	export let authors: string[];
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

<p class="text-xs">{subText}</p>

<div class="flex flex-row items-center gap-1">
	<Users class="h-3 w-3" />
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

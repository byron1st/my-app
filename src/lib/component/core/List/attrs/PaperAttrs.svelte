<script lang="ts">
	import CalendarDays from '$lib/icons/CalendarDays.svelte';
	import MapPin from '$lib/icons/MapPin.svelte';
	import Users from '$lib/icons/Users.svelte';
	import Attrs from '$lib/component/core/List/attrs/Attrs.svelte';
	import TextAttr from '$lib/component/core/List/attrs/TextAttr.svelte';

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
	$: authorsText = authors
		.map((author) => {
			if (author === 'Hwi Ahn' || author === '안휘') {
				return `<span class="font-bold text-blue-600 dark:text-blue-300">${author}</span>`;
			}
			return author;
		})
		.join(', ');
</script>

<TextAttr text={subText} />

<Attrs attrs={[{ component: Users, value: authorsText }]} />

<Attrs
	attrs={[
		{ component: CalendarDays, value: date ?? '' },
		conference ? { component: MapPin, value: conference.location } : undefined
	]}
/>

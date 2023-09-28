<script lang="ts">
	import Attrs from '$lib/component/core/List/attrs/Attrs.svelte';
	import { getDuration } from '$lib/date';
	import { CalendarDays } from 'lucide-svelte';

	export let from: Date;
	export let to: Date;
	export let format: string | undefined = undefined;
</script>

<Attrs attrs={[{ component: CalendarDays, value: getDuration(from, to, format) }]} />

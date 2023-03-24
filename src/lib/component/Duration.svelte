<script lang="ts">
	import { getDuration } from '$lib/date';
	import CalendarDays from '$lib/icons/CalendarDays.svelte';

	export let from: Date;
	export let to: Date | undefined = undefined;
	export let format: string | undefined = undefined;
</script>

<div class="flex flex-row items-center gap-1">
	<CalendarDays class="h-3 w-3" />
	<p class="text-xs">{getDuration(from, to, format)}</p>
</div>

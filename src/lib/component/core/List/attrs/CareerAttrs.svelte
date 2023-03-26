<script lang="ts">
	import Briefcase from '$lib/icons/Briefcase.svelte';
	import Duration from '$lib/component/Duration.svelte';

	export let position: string;
	export let from: Date;
	export let to: Date | undefined = undefined;
</script>

<div class="flex flex-row items-center gap-1">
	<Briefcase class="h-3 w-3" />
	<p class="text-xs">{position}</p>
</div>
<Duration {from} {to} />

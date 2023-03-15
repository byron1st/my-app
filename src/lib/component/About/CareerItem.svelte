<script lang="ts">
	import Briefcase from '$lib/icons/Briefcase.svelte';
	import ArrowTopRightOnSquare from '$lib/icons/ArrowTopRightOnSquare.svelte';
	import Duration from '$lib/component/About/Duration.svelte';

	export let work: string;
	export let position: string;
	export let from: Date;
	export let to: Date | undefined = undefined;
</script>

<div class="flex w-full flex-row justify-between py-2">
	<div class="flex flex-col">
		<p>{work}</p>
		<div class="flex flex-row items-center gap-1">
			<Briefcase class="h-3 w-3" />
			<p class="text-xs">{position}</p>
		</div>
		<Duration {from} {to} />
	</div>

	<ArrowTopRightOnSquare class="h-5 w-5 shrink-0" />
</div>

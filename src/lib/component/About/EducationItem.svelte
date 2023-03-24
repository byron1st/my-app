<script lang="ts">
	import ArrowTopRightOnSquare from '$lib/icons/ArrowTopRightOnSquare.svelte';
	import Duration from '$lib/component/Duration.svelte';

	export let text = '';
	export let subText = '';
	export let from: Date;
	export let to: Date | undefined = undefined;
	export let link: string | undefined = undefined;
</script>

<div class="flex w-full flex-row justify-between py-2">
	<div class="flex flex-col">
		<p>{text}</p>

		<Duration {from} {to} />

		{#if subText}
			<p class="text-xs text-slate-800/50 dark:text-slate-100/50">
				{subText}
			</p>
		{/if}
	</div>

	{#if link}
		<ArrowTopRightOnSquare class="h-5 w-5 shrink-0" />
	{/if}
</div>

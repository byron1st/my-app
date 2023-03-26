<script lang="ts">
	import Duration from '$lib/component/Duration.svelte';

	export let note = '';
	export let from: Date;
	export let to: Date | undefined = undefined;
</script>

<Duration {from} {to} />
{#if note}
	<p class="text-xs text-slate-800/50 dark:text-slate-100/50">
		{note}
	</p>
{/if}

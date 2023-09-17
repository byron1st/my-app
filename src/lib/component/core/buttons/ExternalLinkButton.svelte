<script lang="ts">
	import Stackoverflow from '$lib/icons/Stackoverflow.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
	import Mastodon from '$lib/icons/Mastodon.svelte';
	import Icon from '$lib/component/core/Icon.svelte';

	export let social = '';
	export let link = '';
	export let account = '';

	$: icon =
		social === 'GitHub'
			? GitHub
			: social === 'StackOverflow'
			? Stackoverflow
			: social === 'Mastodon'
			? Mastodon
			: undefined;
</script>

<div class="shrink-0 rounded-lg bg-slate-a3 py-1 px-2 text-xs">
	<a
		class="flex h-full w-full cursor-pointer items-center justify-center gap-1"
		href={link}
		target="_blank"
		rel="noopener noreferrer"
	>
		{#if icon}
			<Icon {icon} size="sm" />
		{:else}
			<p>[{social}]</p>
		{/if}
		<p class="hover:underline">{account}</p></a
	>
</div>

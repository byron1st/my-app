<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import IconButton from '$lib/component/IconButton.svelte';
	import XMark from '$lib/icons/XMark.svelte';

	export let title: string;
	export let preventCloseFromOverlayClick: boolean = false;
	export let onClose: () => void;

	function close() {
		document.body.className = document.body.className.replace('disable-scrolling', '');
		onClose();
	}

	$: document.body.className += 'disable-scrolling';
</script>

<div
	class="fixed top-0 left-0 h-full w-full bg-gray-800/50 dark:bg-gray-800/80"
	on:click={!preventCloseFromOverlayClick ? close : null}
	on:keydown|preventDefault
	transition:fade={{ duration: 100 }}
/>

<div
	class="fixed top-0 left-0 flex h-full w-full flex-col bg-slate-50 px-4 shadow-2xl dark:bg-slate-900 sm:absolute sm:top-1/2 sm:left-1/2 sm:h-fit sm:max-h-screen sm:max-w-lg sm:-translate-y-1/2 sm:-translate-x-1/2"
	transition:fly={{ duration: 100, y: 100 }}
>
	<!-- <div
	class="absolute top-1/2 left-1/2 flex h-full w-full max-w-lg -translate-y-1/2 -translate-x-1/2 flex-col overflow-auto rounded border border-slate-800/10 bg-slate-50 px-4 shadow-2xl dark:border-slate-100/10 dark:bg-slate-900 sm:h-fit sm:max-h-screen"
	transition:fly={{ duration: 100, y: 100 }}
> -->
	<div class="flex flex-shrink-0 items-center justify-between py-2">
		<div class="text-lg font-bold">{title}</div>

		<IconButton component={XMark} onClick={close} />
	</div>

	<div class="flex-1">
		<slot />
	</div>

	{#if $$slots.footer}
		<div class="h-12 flex-shrink-0">
			<slot name="footer" {close} />
		</div>
	{/if}
</div>

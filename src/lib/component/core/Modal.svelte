<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import classnames from 'classnames';
	import IconButton from '$lib/component/core/buttons/IconButton.svelte';
	import { X } from 'lucide-svelte';

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
	transition:fade={{ duration: 100 }}
/>

<div
	class={classnames(
		'modal-max-h fixed top-0 left-0 flex h-full w-full flex-col overflow-auto bg-slate-a1 px-4 shadow-2xl z-10',
		'sm:modal-max-h sm:top-1/2 sm:left-1/2 sm:h-fit sm:max-w-lg sm:-translate-y-1/2 sm:-translate-x-1/2 sm:overflow-auto sm:rounded sm:border sm:border-slate-a6'
	)}
	transition:fly={{ duration: 100, y: 100 }}
>
	<div class="flex flex-shrink-0 items-center justify-between py-2">
		<div class="text-lg font-bold">{title}</div>

		<IconButton onClick={close}>
			<X size={20} />
		</IconButton>
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

<style>
	/* tailwindcss 의 sm */
	@media (min-width: 640px) {
		.modal-max-h {
			max-height: calc(100vh - 2rem);
		}
	}
</style>

<script lang="ts">
	import classnames from 'classnames';
	import type { ComponentType } from 'svelte';
	import Icon from '$lib/component/core/Icon.svelte';

	export let kind = '';
	export let href: string | undefined = undefined;
	export let leftIcon: ComponentType | undefined = undefined;
	export let length: number;
	export let index: number;
	$: isFirst = index === 0;
	$: isLast = index === length - 1;
</script>

<svelte:element
	this={href ? 'a' : 'div'}
	class={classnames('flex flex-row items-center pr-4 transition', {
		'active:bg-slate-300 dark:active:bg-slate-600': Boolean(href),
		'rounded-t-md': isFirst,
		'rounded-b-md': isLast,
		'pl-4': !kind,
		'hover:border-slate-500 hover:bg-slate-200 active:border-slate-600 active:bg-slate-300 dark:hover:border-slate-400 dark:hover:bg-slate-700 dark:active:border-slate-300 dark:active:bg-slate-600':
			Boolean(href)
	})}
	{href}
	target="_blank"
	rel="noopener noreferrer"
>
	<div
		class={classnames('flex h-full w-full flex-1 flex-row justify-between py-2', {
			'border-b border-b-slate-800/10 dark:border-b-slate-100/10': !isLast
		})}
	>
		<slot />

		{#if leftIcon}
			<Icon icon={leftIcon} class="shrink-0" />
		{:else if $$slots.leftItem}
			<slot name="leftItem" />
		{/if}
	</div>
</svelte:element>

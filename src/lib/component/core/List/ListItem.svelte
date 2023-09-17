<script lang="ts">
	import classnames from 'classnames';
	import type { ComponentType } from 'svelte';
	import ListKind from '$lib/component/core/List/ListKind.svelte';
	import Icon from '$lib/component/core/Icon.svelte';

	export let kind = '';
	export let title = '';
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
		'rounded-t-md': isFirst,
		'rounded-b-md': isLast,
		'pl-4': !kind,
		'active:border-slate-a8 hover:bg-slate-a4 active:bg-slate-a5': Boolean(href)
	})}
	{href}
	target="_blank"
	rel="noopener noreferrer"
>
	{#if kind}
		<ListKind {kind} />
	{/if}

	<div
		class={classnames('flex h-full w-full flex-1 flex-row justify-between py-2', {
			'border-b border-b-slate-a7': !isLast
		})}
	>
		{#if $$slots.content}
			<slot name="content" />
		{:else}
			<div class="flex flex-col">
				<p>{title}</p>
				<slot name="attributes" class="flex flex-col" />
			</div>
		{/if}

		{#if leftIcon}
			<Icon icon={leftIcon} class="shrink-0" />
		{:else if $$slots.leftItem}
			<slot name="leftItem" />
		{/if}
	</div>
</svelte:element>

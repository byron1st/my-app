<script lang="ts">
	import classnames from 'classnames';

	export let title = '';
	export let href: string | undefined = undefined;
	export let isFirst = false;
	export let isLast = false;
</script>

<a
	class={classnames('flex flex-row items-center pr-4 transition', {
		'active:bg-slate-300 dark:active:bg-slate-600': Boolean(href),
		'rounded-t-md': isFirst,
		'rounded-b-md': isLast,
		'pl-4': !title
	})}
	{href}
	target="_blank"
	rel="noopener noreferrer"
>
	{#if title}
		<div
			class={classnames(
				'flex w-16 shrink-0 flex-row items-center justify-center text-slate-800/50 dark:text-slate-100/50',
				title.length >= 5 ? 'text-xs' : 'text-sm'
			)}
		>
			{title}
		</div>
	{/if}

	<div
		class={classnames('h-full flex-1', {
			'border-b border-b-slate-800/10 dark:border-b-slate-100/10': !isLast
		})}
	>
		<slot />
	</div>
</a>

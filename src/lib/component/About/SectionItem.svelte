<script lang="ts">
	import classnames from 'classnames';

	export let title = '';
	export let href: string | undefined = undefined;
	export let isFirst = false;
	export let isLast = false;
</script>

<a
	class={classnames('flex flex-row items-center px-4 transition', {
		'active:bg-slate-300': Boolean(href),
		'rounded-t-md': isFirst,
		'rounded-b-md': isLast
	})}
	{href}
	target="_blank"
	rel="noopener noreferrer"
>
	{#if title}
		<div
			class="flex w-10 shrink-0 flex-row items-center text-sm text-slate-800/50 dark:text-slate-100/50"
		>
			{title}
		</div>
	{/if}

	<div
		class={classnames('h-full flex-1', {
			'border-b border-b-slate-800/30 dark:border-b-slate-50/30': !isLast
		})}
	>
		<slot />
	</div>
</a>

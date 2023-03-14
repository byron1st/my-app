<script lang="ts">
	import classnames from 'classnames';
	export let title: string;
	export let onClick: () => void | Promise<void>;
	export let color: 'primary' | 'default' | 'warning' = 'default';
</script>

<button
	class={classnames(
		'flex min-w-[4rem] flex-row justify-center rounded border border-slate-800/10 text-sm shadow-sm',
		{
			'bg-blue-500 text-slate-50 active:bg-blue-700 dark:bg-blue-700 dark:active:bg-blue-500':
				color === 'primary',
			'bg-red-500 text-slate-50 active:bg-red-700 dark:bg-red-700 dark:active:bg-red-500':
				color === 'warning',
			'active:bg-slate-200 dark:bg-slate-700 dark:active:bg-slate-500': color === 'default'
		}
	)}
	on:click={onClick}>{title}</button
>

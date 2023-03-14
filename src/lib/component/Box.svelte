<script lang="ts">
	import classnames from 'classnames';

	export let classNames: string = '';
	export let enableHover = true;
</script>

<div
	class={classnames(
		'rounded-md border border-slate-800/10 bg-slate-100 transition dark:border-slate-100/10 dark:bg-slate-800',
		{
			'hover:border-slate-500 hover:bg-slate-200 dark:hover:border-slate-400 dark:hover:bg-slate-700':
				enableHover
		},
		classNames
	)}
>
	<slot />
</div>

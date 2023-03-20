<script lang="ts">
	import classnames from 'classnames';

	export let enableHover = true;
	export let enableClick = false;
</script>

<div
	id={$$props.id}
	class={classnames(
		'rounded-md border border-slate-800/10 bg-slate-100 transition dark:border-slate-100/10 dark:bg-slate-800',
		{
			'hover:border-slate-500 hover:bg-slate-200 dark:hover:border-slate-400 dark:hover:bg-slate-700':
				enableHover,
			'active:border-slate-600 active:bg-slate-300 dark:active:border-slate-300 dark:active:bg-slate-600':
				enableClick
		},
		$$props.class
	)}
>
	<slot />
</div>

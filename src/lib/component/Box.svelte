<script lang="ts">
	import classnames from 'classnames';

	export let classNames: string = '';
</script>

<div
	class={classnames(
		'rounded-md border border-slate-300 bg-slate-100 transition hover:border-slate-500 hover:bg-slate-200 dark:border-slate-600 dark:bg-slate-800 dark:hover:border-slate-400 dark:hover:bg-slate-700',
		classNames
	)}
>
	<slot />
</div>

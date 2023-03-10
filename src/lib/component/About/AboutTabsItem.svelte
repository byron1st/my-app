<script lang="ts">
	import classnames from 'classnames';

	export let title = '';
	export let current = false;
	export let href = '';
</script>

<a
	class={classnames(
		'flex w-24 cursor-pointer flex-row justify-center rounded-md transition hover:bg-slate-200 dark:hover:bg-slate-700',
		{ 'bg-slate-200 dark:bg-slate-700': current }
	)}
	{href}
>
	{title}
</a>

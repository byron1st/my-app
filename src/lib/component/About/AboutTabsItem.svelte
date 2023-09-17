<script lang="ts">
	import classnames from 'classnames';

	export let title = '';
	export let current = false;
	export let href = '';
</script>

<a
	class={classnames(
		'flex w-24 cursor-pointer flex-row justify-center rounded-md transition',
		current ? 'bg-slate-a5' : 'bg-slate-a2'
	)}
	{href}
>
	{title}
</a>

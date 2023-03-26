<script lang="ts">
	import classnames from 'classnames';
</script>

<div
	id={$$props.id}
	class={classnames(
		'rounded-md border border-slate-800/10 bg-slate-100 transition dark:border-slate-100/10 dark:bg-slate-800',
		$$props.class
	)}
>
	<slot />
</div>

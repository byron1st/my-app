<script lang="ts">
	import classnames from 'classnames';

	export let text: string;
	export let isSubtle = false;
</script>

<p
	class={classnames('text-xs', {
		'text-slate-800/50 dark:text-slate-100/50': isSubtle
	})}
>
	{text}
</p>

<script lang="ts">
	import classnames from 'classnames';

	export let kind: string;
</script>

<div
	class={classnames(
		'flex w-16 shrink-0 flex-row items-center justify-center opacity-80 font-light',
		kind.length >= 5 ? 'text-xs' : 'text-sm'
	)}
>
	{kind}
</div>

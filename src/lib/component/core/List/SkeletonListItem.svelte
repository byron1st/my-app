<script lang="ts">
	import classnames from 'classnames';

	export let hasKind = false;
	export let isLast = false;
</script>

<div
	class={classnames('flex animate-pulse flex-row pr-4', {
		'pl-4': !hasKind
	})}
>
	{#if hasKind}
		<div class="flex w-16 flex-row items-center justify-center px-2">
			<div class="h-4 w-full rounded-lg bg-slate-a9" />
		</div>
	{/if}

	<div
		class={classnames('flex h-full w-full flex-1 flex-row justify-between py-3', {
			'border-b border-b-slate-a6': !isLast
		})}
	>
		<div class="h-4 w-full rounded-lg bg-slate-a9" />
	</div>
</div>

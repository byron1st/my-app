<script lang="ts">
	import classnames from 'classnames';

	export let title = '';
	export let isLast = false;
</script>

<div class="flex flex-row items-center">
	<div
		class="flex w-10 shrink-0 flex-row items-center text-sm text-slate-800/50 dark:text-slate-100/50"
	>
		{title}
	</div>

	<div
		class={classnames('h-full flex-1', {
			'border-b border-b-slate-800/30 dark:border-b-slate-50/30': !isLast
		})}
	>
		<slot />

		<!-- TODO: action icon -->
	</div>
</div>

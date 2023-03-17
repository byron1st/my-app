<script lang="ts">
	import Box from '$lib/component/Box.svelte';

	export let label: string;
	export let description: string;
	let descriptionBox: HTMLDivElement;
	let show = false;

	$: isTruncated = descriptionBox
		? descriptionBox.scrollHeight !== descriptionBox.clientHeight
		: false;

	function toggle() {
		descriptionBox.classList.toggle('line-clamp-6');
		show = !show;
	}
</script>

<Box enableHover={false}>
	<div class="flex flex-col py-2 px-4">
		<p class="text-sm">{label}</p>
		<div
			class="whitespace-pre-wrap text-sm text-slate-800/50 line-clamp-6 dark:text-slate-100/50"
			bind:this={descriptionBox}
		>
			{@html description.replace(/\n/g, '<br/>')}
		</div>

		{#if isTruncated}
			<div class="flex w-full flex-row justify-end">
				<button
					class="text-end text-xs text-slate-800/50 underline dark:text-slate-100/50"
					on:click={toggle}
				>
					{!show ? '더보기' : '접기'}
				</button>
			</div>
		{/if}
	</div>
</Box>

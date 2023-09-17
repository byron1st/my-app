<script lang="ts">
	import DescriptionContainer from '$lib/component/core/Description/DescriptionContainer.svelte';

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

<DescriptionContainer>
	<p class="text-sm font-bold">{label}</p>

	<div class="whitespace-pre-wrap text-sm line-clamp-6" bind:this={descriptionBox}>
		{@html description.replace(/\n/g, '<br/>')}
	</div>

	{#if isTruncated}
		<div class="flex w-full flex-row justify-end">
			<button class="text-end text-xs underline" on:click={toggle}>
				{!show ? '더보기' : '접기'}
			</button>
		</div>
	{/if}
</DescriptionContainer>

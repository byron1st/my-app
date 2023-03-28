<script lang="ts">
	import SkeletonListItem from '$lib/component/core/List/SkeletonListItem.svelte';

	export let hasKind = false;
	export let count = 3;
</script>

{#each new Array(count) as _, index}
	<SkeletonListItem {hasKind} isLast={count === index} />
{/each}

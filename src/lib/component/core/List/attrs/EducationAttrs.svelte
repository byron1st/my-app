<script lang="ts">
	import DurationAttr from '$lib/component/core/List/attrs/DurationAttr.svelte';
	import TextAttr from '$lib/component/core/List/attrs/TextAttr.svelte';

	export let note = '';
	export let from: Date;
	export let to: Date | undefined = undefined;
</script>

<DurationAttr {from} {to} />

{#if note}
	<TextAttr text={note} isSubtle />
{/if}

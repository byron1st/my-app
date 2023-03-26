<script lang="ts">
	import Briefcase from '$lib/icons/Briefcase.svelte';
	import DurationAttr from '$lib/component/core/List/attrs/DurationAttr.svelte';
	import Attrs from '$lib/component/core/List/attrs/Attrs.svelte';

	export let position: string;
	export let from: Date;
	export let to: Date | undefined = undefined;
</script>

<Attrs attrs={[{ component: Briefcase, value: position }]} />
<DurationAttr {from} {to} />

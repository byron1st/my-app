<script lang="ts">
	import DurationAttr from '$lib/component/core/List/attrs/DurationAttr.svelte';
	import Attrs from '$lib/component/core/List/attrs/Attrs.svelte';
	import { Briefcase } from 'lucide-svelte';
	import TextAttr from '$lib/component/core/List/attrs/TextAttr.svelte';

	export let position: string;
	export let from: Date;
	export let to: Date;
	export let overview: string;
</script>

<Attrs attrs={[{ component: Briefcase, value: position }]} />
<DurationAttr {from} {to} />
<TextAttr text={overview} />

<script lang="ts">
	import AtSymbol from '$lib/icons/AtSymbol.svelte';
	import Envelope from '$lib/icons/Envelope.svelte';
	import InfoItem from '$lib/component/About/PersonalInfo/InfoItem.svelte';

	export let id = '';
	export let domain = '';

	$: href = `mailto:${id}@${domain}`;
</script>

<InfoItem {href}>
	<Envelope class="mr-1 h-4 w-4" slot="icon" />
	{id}<AtSymbol class="h-3 w-3" />{domain}
</InfoItem>

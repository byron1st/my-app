<script lang="ts">
	import AtSymbol from '$lib/icons/AtSymbol.svelte';
	import Envelope from '$lib/icons/Envelope.svelte';
	import InfoItem from '$lib/component/About/PersonalInfo/InfoItem.svelte';
	import Icon from '$lib/component/core/Icon.svelte';

	export let id = '';
	export let domain = '';

	$: href = `mailto:${id}@${domain}`;
</script>

<InfoItem {href}>
	<Icon icon={Envelope} class="mr-1" slot="icon" />
	{id}<Icon icon={AtSymbol} />{domain}
</InfoItem>

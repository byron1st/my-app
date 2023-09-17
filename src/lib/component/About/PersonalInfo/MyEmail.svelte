<script lang="ts">
	import InfoItem from '$lib/component/About/PersonalInfo/InfoItem.svelte';
	import { AtSign, Mail } from 'lucide-svelte';

	export let id = '';
	export let domain = '';

	$: href = `mailto:${id}@${domain}`;
</script>

<InfoItem {href}>
	<Mail class="mr-1" size={20} slot="icon" />
	{id}<AtSign size={20} />{domain}
</InfoItem>

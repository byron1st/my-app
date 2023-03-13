<script lang="ts">
	import type { PersonalInfo } from '$lib/models/personalinfo';
	import BuildingOffice from '$lib/icons/BuildingOffice.svelte';
	import MapPin from '$lib/icons/MapPin.svelte';
	import InfoItem from '$lib/component/About/PersonalInfo/InfoItem.svelte';
	import MyEmail from '$lib/component/About/PersonalInfo/MyEmail.svelte';
	import SocialLink from '$lib/component/About/PersonalInfo/SocialLink.svelte';

	export let personalInfo: PersonalInfo;
</script>

<div class="flex w-full flex-col">
	<div class="text-xl font-bold">안휘 (Hwi Ahn)</div>
	<MyEmail id={personalInfo.email.id} domain={personalInfo.email.domain} />
	<InfoItem href={personalInfo.work.link} text={personalInfo.work.name}>
		<BuildingOffice class="mr-1 h-4 w-4" slot="icon" />
	</InfoItem>
	<InfoItem href={personalInfo.home.link} text={personalInfo.home.name}>
		<MapPin class="mr-1 h-4 w-4" slot="icon" />
	</InfoItem>

	<div class="flex flex-row gap-2 overflow-x-auto py-2">
		{#each personalInfo.socials as { name: social, link }}
			<SocialLink {social} {link} />
		{/each}
	</div>
</div>

<script lang="ts">
	import type { PersonalInfoType } from '$lib/models/personalinfo';
	import InfoItem from '$lib/component/About/PersonalInfo/InfoItem.svelte';
	import MyEmail from '$lib/component/About/PersonalInfo/MyEmail.svelte';
	import ExternalLinkButton from '$lib/component/core/buttons/ExternalLinkButton.svelte';
	import { Building, MapPin } from 'lucide-svelte';

	export let personalInfo: PersonalInfoType;
</script>

<div class="flex w-full flex-col items-center sm:flex-row sm:justify-between">
	<img src="/profile.jpg" alt="profile" class="mb-2 h-16 w-16 rounded-full border-2 sm:hidden" />

	<div class="flex w-full flex-col gap-1">
		<div class="text-xl font-bold">안휘 (Hwi Ahn)</div>
		<MyEmail id={personalInfo.email.id} domain={personalInfo.email.domain} />
		<InfoItem href={personalInfo.work.link} text={personalInfo.work.name}>
			<Building class="mr-1" size={20} slot="icon" />
		</InfoItem>
		<InfoItem href={personalInfo.home.link} text={personalInfo.home.name}>
			<MapPin class="mr-1" size={20} slot="icon" />
		</InfoItem>

		<div class="flex flex-row gap-2 overflow-x-auto pb-2">
			{#each personalInfo.socials as { name: social, link, account }}
				<ExternalLinkButton {social} {link} {account} />
			{/each}
		</div>
	</div>

	<img src="/profile.jpg" alt="profile" class="hidden h-32 w-32 rounded-full border-2 sm:flex" />
</div>

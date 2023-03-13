<script lang="ts">
	import BuildingOffice from '$lib/icons/BuildingOffice.svelte';
	import MapPin from '$lib/icons/MapPin.svelte';
	import InfoItem from '$lib/component/About/PersonalInfo/InfoItem.svelte';
	import MyEmail from '$lib/component/About/PersonalInfo/MyEmail.svelte';
	import SocialLink from '$lib/component/About/PersonalInfo/SocialLink.svelte';
</script>

<div class="flex w-full flex-col">
	<div class="text-xl font-bold">안휘 (Hwi Ahn)</div>
	<MyEmail id="hwi.ahn" domain="bigpicturelabs.io" />
	<InfoItem href="https://bigpicturelabs.io" text="빅픽처랩(주)">
		<BuildingOffice class="mr-1 h-4 w-4" slot="icon" />
	</InfoItem>
	<InfoItem
		href="https://map.naver.com/v5/search/세종시/address/14169794.809264738,4366919.855911022,세종특별자치시,adm?c=11,0,0,0,dh&isCorrectAnswer=true"
		text="세종, 대한민국 (Sejong, South Korea)"
	>
		<MapPin class="mr-1 h-4 w-4" slot="icon" />
	</InfoItem>

	<div class="flex flex-row gap-2 overflow-x-auto py-2">
		<SocialLink social="GitHub" link="https://github.com/byron1st" />
		<SocialLink social="StackOverflow" link="https://stackoverflow.com/users/1331366/byron1st" />
		<SocialLink social="벨로그" link="https://velog.io/@byron1st" />
	</div>
</div>

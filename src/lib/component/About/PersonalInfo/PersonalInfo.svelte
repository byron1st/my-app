<script lang="ts">
	import MyEmail from '$lib/component/About/PersonalInfo/MyEmail.svelte';
	import SocialLink from '$lib/component/About/PersonalInfo/SocialLink.svelte';
</script>

<div class="flex w-full flex-col">
	<div class="text-xl font-bold">안휘 (Hwi Ahn)</div>
	<MyEmail id="hwi.ahn" domain="bigpicturelabs.io" />
	<MyEmail id="byron1st" domain="icloud.com" isPersonal />

	<div class="flex flex-row gap-2 overflow-x-auto py-2">
		<SocialLink social="GitHub" link="https://github.com/byron1st" />
		<SocialLink social="StackOverflow" link="https://stackoverflow.com/users/1331366/byron1st" />
		<SocialLink social="벨로그" link="https://velog.io/@byron1st" />
	</div>
</div>

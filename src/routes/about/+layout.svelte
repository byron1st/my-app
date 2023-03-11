<script lang="ts">
	import AboutTabs from '$lib/component/About/AboutTabs.svelte';
	import PersonalInfo from '$lib/component/About/PersonalInfo/PersonalInfo.svelte';
</script>

<div class="flex w-full flex-col gap-4 py-10">
	<PersonalInfo />
	<AboutTabs />
	<slot />
</div>

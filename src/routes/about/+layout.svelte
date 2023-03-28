<script lang="ts">
	import { get } from '$lib/stores/personalinfo';
	import AboutTabs from '$lib/component/About/AboutTabs.svelte';
	import PersonalInfo from '$lib/component/About/PersonalInfo/PersonalInfo.svelte';

	const personalInfo = get();
</script>

<div class="flex w-full flex-col gap-4 py-10">
	<PersonalInfo personalInfo={$personalInfo} />
	<AboutTabs />
	<slot />
</div>

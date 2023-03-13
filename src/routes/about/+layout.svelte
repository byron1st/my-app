<script lang="ts">
	import AboutTabs from '$lib/component/About/AboutTabs.svelte';
	import PersonalInfo from '$lib/component/About/PersonalInfo/PersonalInfo.svelte';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
	$: personalInfo = data.personalInfo;
</script>

<div class="flex w-full flex-col gap-4 py-10">
	<PersonalInfo {personalInfo} />
	<AboutTabs />
	<slot />
</div>

<script lang="ts">
	import { page } from '$app/stores';
	import Box from '$lib/component/core/Box.svelte';
	import AboutTabsItem from '$lib/component/About/AboutTabsItem.svelte';

	$: current = $page.url.pathname === '/about/school' ? 'school' : 'work';
</script>

<div class="flex w-full flex-row justify-center">
	<Box class="flex flex-row">
		<AboutTabsItem title="Work" current={current === 'work'} href="/about" />
		<AboutTabsItem title="School" current={current === 'school'} href="/about/school" />
	</Box>
</div>

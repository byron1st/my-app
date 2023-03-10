<script lang="ts">
	import classnames from 'classnames';
	import Box from '$lib/component/Box.svelte';
	import { page } from '$app/stores';
	import AboutTabsItem from '$lib/component/About/AboutTabsItem.svelte';

	$: current = $page.url.pathname === '/about/school' ? 'school' : 'work';
</script>

<div class="flex w-full flex-row justify-center">
	<Box classNames="flex flex-row" enableHover={false}>
		<AboutTabsItem title="Work" current={current === 'work'} href="/about" />
		<AboutTabsItem title="School" current={current === 'school'} href="/about/school" />
	</Box>
</div>

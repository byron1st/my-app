<script lang="ts">
	import ProjectItem from '$lib/component/Projects/ProjectItem.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div class="flex w-full flex-col">
	<div class="flex flex-col sm:py-20">
		{#each data.props.projects as project}
			<ProjectItem {project} />
		{/each}
	</div>
</div>

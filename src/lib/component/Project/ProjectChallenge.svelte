<script lang="ts">
	import ProjectContentSectionItem from '$lib/component/Project/ProjectContentSectionItem.svelte';

	export let title: string;
	export let challenge: string;
	export let solution: string;
</script>

<h2 class="text-lg font-bold">{title}</h2>
<div class="mb-2 border-b border-b-slate-a7" />
<ProjectContentSectionItem label="문제점" content={challenge} />
<ProjectContentSectionItem label="해결책" content={solution} />

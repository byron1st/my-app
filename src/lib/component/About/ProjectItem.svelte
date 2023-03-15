<script lang="ts">
	import classnames from 'classnames';
	import type { ProjectSerialized } from '$lib/models/projects';
	import BuildingOffice from '$lib/icons/BuildingOffice.svelte';
	import User from '$lib/icons/User.svelte';
	import Duration from '$lib/component/About/Duration.svelte';
	import Box from '$lib/component/Box.svelte';
	import UserCircle from '$lib/icons/UserCircle.svelte';
	import Users from '$lib/icons/Users.svelte';

	export let project: ProjectSerialized;

	$: isFinished = Boolean(project.to);
</script>

<Box
	class={classnames(
		'flex w-full flex-row justify-between px-4 py-2',
		isFinished ? 'text-slate-800/50 dark:text-slate-100/50' : null
	)}
>
	<div class="flex flex-col">
		<p>
			{project.name}
			{#if isFinished}<span class="text-xs">(종료)</span>{/if}
		</p>
		<p class="text-xs text-slate-800/50 dark:text-slate-100/50">
			{project.overview}
		</p>
		<Duration from={project.from} to={project.to} format="YYYY-MM" />
		<div class="flex flex-row items-center gap-1">
			<UserCircle class="h-3 w-3" />
			<p class="text-xs">{project.role}</p>
		</div>
		<div class="flex flex-row items-center gap-1">
			<Users class="h-3 w-3" />
			<p class="text-xs">{project.team}</p>
		</div>
		<!-- TODO: Skills (e.g #Java, #Go ) -->
	</div>

	<div class="flex shrink-0 flex-row justify-end">
		{#if project.isPersonal}
			<User class="h-5 w-5" />
		{:else}
			<BuildingOffice class="h-5 w-5" />
		{/if}
	</div>
</Box>

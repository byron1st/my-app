<script lang="ts">
	import ArrowTopRightOnSquare from '$lib/icons/ArrowTopRightOnSquare.svelte';
	import Duration from '$lib/component/About/Duration.svelte';
	import type { LectureType } from '$lib/models/lectures';
	import Users from '$lib/icons/Users.svelte';
	import BuildingOffice from '$lib/icons/BuildingOffice.svelte';

	export let lecture: Pick<LectureType, keyof LectureType> & { _id: string };
</script>

<div class="flex w-full flex-row justify-between py-2">
	<div class="flex flex-col">
		<p>{lecture.description}</p>

		<p class="text-xs text-slate-800/50 dark:text-slate-100/50">
			{lecture.topic}
		</p>

		<Duration from={lecture.from} to={lecture.to} format="YYYY-MM" />
		<div class="flex flex-row items-center gap-1">
			<Users class="h-3 w-3" />
			<p class="text-xs">{lecture.target}</p>
			<BuildingOffice class="h-3 w-3" />
			<p class="text-xs">{lecture.org}</p>
		</div>
	</div>

	<p class="shrink-0">{lecture.count}회</p>
</div>

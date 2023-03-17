<script lang="ts">
	import ArrowTopRightOnSquare from '$lib/icons/ArrowTopRightOnSquare.svelte';
	import Duration from '$lib/component/About/Duration.svelte';
	import type { LectureType } from '$lib/models/lectures';

	export let lecture: Pick<LectureType, keyof LectureType> & { _id: string };
</script>

<div class="flex w-full flex-row justify-between py-2">
	<div class="flex flex-col">
		<p>{lecture.description}</p>

		<p class="text-xs text-slate-800/50 dark:text-slate-100/50">
			{lecture.topic}
		</p>

		<Duration from={lecture.from} to={lecture.to} format="YYYY-MM" />
	</div>

	<p class="shrink-0">{lecture.count}회</p>
</div>

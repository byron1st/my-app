<script lang="ts">
	import DurationAttr from '$lib/component/core/List/attrs/DurationAttr.svelte';
	import type { LectureType } from '$lib/models/lectures';
	import Users from '$lib/icons/Users.svelte';
	import BuildingOffice from '$lib/icons/BuildingOffice.svelte';
	import Attrs from '$lib/component/core/List/attrs/Attrs.svelte';
	import TextAttr from '$lib/component/core/List/attrs/TextAttr.svelte';

	export let lecture: Pick<LectureType, keyof LectureType> & { _id: string };
</script>

<TextAttr text={lecture.topic} isSubtle />

<DurationAttr from={lecture.from} to={lecture.to} format="YYYY-MM" />

<Attrs
	attrs={[
		{ component: Users, value: lecture.target },
		{ component: BuildingOffice, value: lecture.org }
	]}
/>

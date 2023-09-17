<script lang="ts">
	import DurationAttr from '$lib/component/core/List/attrs/DurationAttr.svelte';
	import type { LectureType } from '$lib/models/lectures';
	import Attrs from '$lib/component/core/List/attrs/Attrs.svelte';
	import TextAttr from '$lib/component/core/List/attrs/TextAttr.svelte';
	import { Building, Users } from 'lucide-svelte';

	export let lecture: Pick<LectureType, keyof LectureType> & { _id: string };
</script>

<TextAttr text={lecture.topic} />

<DurationAttr from={lecture.from} to={lecture.to} format="YYYY-MM" />

<Attrs
	attrs={[
		{ component: Users, value: lecture.target },
		{ component: Building, value: lecture.org }
	]}
/>

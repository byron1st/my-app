<script lang="ts">
	import ExclamationCircle from '$lib/icons/ExclamationCircle.svelte';
	import Button from '$lib/component/Button.svelte';
	import IconButton from '$lib/component/IconButton.svelte';
	import Modal from '$lib/component/Modal.svelte';
	import LabelAndValue from '$lib/component/LabelAndValue.svelte';
	import LabelAndDescription from '$lib/component/LabelAndDescription.svelte';
	import type { SkillSerialized } from '$lib/models/skills';

	export let skill: SkillSerialized;

	let show = false;

	function toggle() {
		show = !show;
	}

	$: levelText =
		skill.level >= 8
			? '현재 사용 중이고, 익숙하며, 현업에 즉시 사용 가능'
			: skill.level >= 5
			? '한두번 사용해보았고, 약간의 적응 이후 현업에 사용 가능'
			: '과거에 사용해보았으나, 현재는 사용하지 않고 있음';

	// 8 ~ 10: 현재 사용 중이고, 익숙하며, 현업에 즉시 사용 가능
	// 5 ~ 7: 한두번 규모가 작거나, 개인 프로젝트에서 사용해보았고, 약간의 러닝 커브 이후 현업에 사용 가능
	// -1: 과거에 사용해보았으나, 현재는 사용하지 않고 있음
</script>

<IconButton component={ExclamationCircle} onClick={toggle} />

{#if show}
	<Modal title={skill.skill} onClose={toggle}>
		<div class="flex flex-col gap-2">
			<LabelAndValue label="기술 수준" value={`${skill.level}/10`} description={levelText} />
			<LabelAndDescription label="설명" description={skill.description} />
		</div>

		<div class="flex h-full flex-row items-center justify-end" slot="footer" let:close>
			<Button title="완료" onClick={close} color="primary" />
		</div>
	</Modal>
{/if}

<script lang="ts">
	import ExclamationCircle from '$lib/icons/ExclamationCircle.svelte';
	import Box from '$lib/component/Box.svelte';
	import Button from '$lib/component/Button.svelte';
	import IconButton from '$lib/component/IconButton.svelte';
	import Modal from '$lib/component/Modal.svelte';

	export let skill: string;
	export let level: number;
	export let description: string;

	let show = false;

	function toggle() {
		show = !show;
	}

	$: levelText =
		level >= 8
			? '현재 사용 중이고, 익숙하며, 현업에 즉시 사용 가능'
			: level >= 5
			? '한두번 사용해보았고, 약간의 적응 이후 현업에 사용 가능'
			: '과거에 사용해보았으나, 현재는 사용하지 않고 있음';

	// 8 ~ 10: 현재 사용 중이고, 익숙하며, 현업에 즉시 사용 가능
	// 5 ~ 7: 한두번 규모가 작거나, 개인 프로젝트에서 사용해보았고, 약간의 러닝 커브 이후 현업에 사용 가능
	// -1: 과거에 사용해보았으나, 현재는 사용하지 않고 있음
</script>

<div class="flex w-full flex-row justify-between py-2">
	<div class="flex flex-col">
		<p>{skill}</p>
	</div>

	<IconButton component={ExclamationCircle} onClick={toggle} />
</div>

{#if show}
	<Modal title={skill} onClose={toggle}>
		<div class="flex flex-col gap-2">
			<Box enableHover={false}>
				<div class="flex flex-row justify-between py-2 px-4">
					<div class="flex flex-col">
						<p class="shrink-0 text-sm">기술 수준</p>
						<p class="text-xs text-slate-800/50 dark:text-slate-100/50">{levelText}</p>
					</div>
					<p class="text-sm text-slate-800/50 dark:text-slate-100/50">{level}/10</p>
				</div>
			</Box>

			<Box enableHover={false}>
				<div class="flex flex-col py-2 px-4">
					<p class="text-sm">설명</p>
					<div class="text-sm text-slate-800/50 dark:text-slate-100/50">
						{@html description.replace(/\n/g, '<br/>')}
					</div>
				</div>
			</Box>

			<!-- TODO: 프로젝트 데이터 추가 후
			<Section title="연관 프로젝트">
				<SectionItem title="프로젝트1" href="/" isFirst>
					<p class="text-xs text-slate-800/50 dark:text-slate-100/50">프로젝트1에 대한 설명</p>
				</SectionItem>
				<SectionItem title="프로젝트2" href="/">
					<p class="text-xs text-slate-800/50 dark:text-slate-100/50">프로젝트2에 대한 설명</p>
				</SectionItem><SectionItem title="프로젝트3" href="/" isLast>
					<p class="text-xs text-slate-800/50 dark:text-slate-100/50">프로젝트3에 대한 설명</p>
				</SectionItem>
			</Section> -->
		</div>

		<div class="flex h-full flex-row items-center justify-end" slot="footer" let:close>
			<Button title="완료" onClick={close} color="primary" />
		</div>
	</Modal>
{/if}

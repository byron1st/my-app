<script lang="ts">
	import { page } from '$app/stores';

	$: statusCode = $page.error?.message === 'Not Found' ? 404 : 500;
	$: statusMessage = $page.error?.message === 'Not Found' ? 'Not Found' : 'Internal Server Error';
	$: description =
		$page.error?.message === 'Not Found'
			? '해당 URL에 맞는 페이지가 없습니다'
			: '서버에 문제가 발생했습니다';
</script>

<div class="h-screen-but-header flex w-full flex-col items-center justify-center">
	<div class="flex flex-row items-center gap-8">
		<p class="text-5xl font-bold">{statusCode}</p>

		<div class="h-full border-l border-l-slate-800 dark:border-l-slate-100" />

		<div class="flex flex-col">
			<p class="text-3xl">{statusMessage}</p>
			<p>{description}</p>
		</div>
	</div>
</div>

<style>
	.h-screen-but-header {
		height: calc(100vh - 3rem);
	}
</style>

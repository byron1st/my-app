<script lang="ts">
	import Header from '$lib/component/Header/Header.svelte';
	import '../app.css';
</script>

<div
	class="flex h-full min-h-screen w-full flex-col items-center bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100"
>
	<Header />

	<div class="h-full w-full px-4 lg:w-[64rem]">
		<slot />
	</div>
</div>

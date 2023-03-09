<script lang="ts">
	import Header from '$lib/component/Header.svelte';
	import '../app.css';
</script>

<div
	class="flex h-full min-h-screen w-full flex-col items-center bg-white text-slate-800 dark:bg-slate-800 dark:text-slate-100"
>
	<Header />

	<div class="h-full w-full lg:w-[64rem]">
		<slot />
	</div>
</div>

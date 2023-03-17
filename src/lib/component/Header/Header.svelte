<script lang="ts">
	import MenuList from '$lib/component/Header/MenuList.svelte';
	import DropdownMenuList from '$lib/component/Header/DropdownMenuList.svelte';
</script>

<div class="flex h-12 w-full items-center justify-between gap-4 px-4 lg:w-[64rem]">
	<a href="/" class="text-lg font-bold transition hover:text-slate-500 dark:hover:text-slate-400"
		>Hwi's Website</a
	>

	<div class="hidden gap-4 sm:flex">
		<MenuList />
	</div>

	<div class="sm:hidden">
		<DropdownMenuList />
	</div>
</div>

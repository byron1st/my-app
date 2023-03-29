<script lang="ts">
	import MenuList from '$lib/component/Header/MenuList.svelte';
	import DropdownMenuList from '$lib/component/Header/DropdownMenuList.svelte';
</script>

<div class="flex h-12 w-full items-center justify-between gap-4 px-4 lg:w-[64rem]">
	<a href="/" class="flex flex-row items-center gap-1">
		<img src="/icon.min.svg" alt="profile" class="h-6 w-6 rounded-lg" />
		<p class="font-bold">Hwi's Website</p>
	</a>

	<div class="hidden gap-4 sm:flex">
		<MenuList />
	</div>

	<div class="sm:hidden">
		<DropdownMenuList />
	</div>
</div>

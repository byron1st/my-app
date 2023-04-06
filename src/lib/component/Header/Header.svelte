<script lang="ts">
	import MenuList from '$lib/component/Header/MenuList.svelte';
	import DropdownMenuList from '$lib/component/Header/DropdownMenuList.svelte';
	import Logo from '$lib/component/core/Logo.svelte';
</script>

<div class="flex h-12 w-full items-center justify-between gap-4 px-4 lg:w-[64rem]">
	<a href="/" class="flex flex-row items-center gap-1">
		<Logo />
	</a>

	<div class="hidden gap-4 sm:flex">
		<MenuList />
	</div>

	<div class="sm:hidden">
		<DropdownMenuList />
	</div>
</div>

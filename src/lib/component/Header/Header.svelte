<script lang="ts">
	import MenuList from '$lib/component/Header/MenuList.svelte';
	import DropdownMenuList from '$lib/component/Header/DropdownMenuList.svelte';
	import Logo from '$lib/component/core/Logo.svelte';
	import { Moon, Sun } from 'lucide-svelte';
	import { colorTheme } from '$lib/stores/color-theme';

	function toggleColorTheme() {
		colorTheme.set($colorTheme === 'dark' ? 'light' : 'dark');
	}
</script>

<div class="flex h-12 w-full items-center justify-between gap-4 px-4 lg:w-[64rem]">
	<div class="flex gap-2">
		<a href="/" class="flex flex-row items-center gap-1">
			<Logo />
		</a>

		<div class="cursor-pointer" on:click={toggleColorTheme}>
			{#if $colorTheme === 'light'}
				<Sun size={20} />
			{:else}
				<Moon size={20} />
			{/if}
		</div>
	</div>

	<div class="hidden gap-4 sm:flex">
		<MenuList />
	</div>

	<div class="sm:hidden">
		<DropdownMenuList />
	</div>
</div>

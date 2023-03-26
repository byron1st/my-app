<script lang="ts">
	import MenuListItem from '$lib/component/Header/MenuListItem.svelte';

	export let closeDropdown: (() => void) | undefined = undefined;
</script>

<MenuListItem
	name="projects"
	href="/projects"
	onDropdown={Boolean(closeDropdown)}
	on:closeDropdown={closeDropdown}
/>
<MenuListItem
	name="about:me"
	href="/about"
	onDropdown={Boolean(closeDropdown)}
	on:closeDropdown={closeDropdown}
/>
<MenuListItem
	name="about:site"
	href="/site"
	onDropdown={Boolean(closeDropdown)}
	on:closeDropdown={closeDropdown}
/>

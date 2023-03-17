<script lang="ts">
	import MenuListItem from '$lib/component/Header/MenuListItem.svelte';

	export let bottomBorder: boolean = false;
</script>

<!-- <MenuListItem name="posts" href="/posts" {bottomBorder} />
<MenuListItem name="favorites" href="/favorites" {bottomBorder} />
<MenuListItem name="logs" href="/logs" {bottomBorder} /> -->
<MenuListItem name="about:me" href="/about" {bottomBorder} />
<MenuListItem name="about:page" href="/about" {bottomBorder} />

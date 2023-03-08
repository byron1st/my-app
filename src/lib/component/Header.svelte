<script lang="ts">
	import HeaderItem from '$lib/component/HeaderItem.svelte';
</script>

<div class="flex h-12 w-full items-center justify-end gap-4 px-4 lg:w-[64rem]">
	<HeaderItem name="home" href="/" />
	<HeaderItem name="posts" href="/posts" />
	<HeaderItem name="favorites" href="/favorites" />
	<HeaderItem name="logs" href="/logs" />
	<HeaderItem name="about" href="/about" />
</div>

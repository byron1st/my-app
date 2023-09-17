<script lang="ts">
	export let title: string;
	export let onClick: () => void | Promise<void>;
</script>

<button
	class="flex min-w-[4rem] flex-row justify-center rounded text-sm shadow-sm text-white bg-indigo-a9 active:bg-indigo-a10"
	on:click={onClick}>{title}</button
>

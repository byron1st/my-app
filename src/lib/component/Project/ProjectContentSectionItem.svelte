<script lang="ts">
	export let label: string;
	export let content: string;
</script>

<div class="flex flex-row mb-2">
	<p class="shrink-0 w-24 font-bold">{label}</p>
	<div>{@html content}</div>
</div>

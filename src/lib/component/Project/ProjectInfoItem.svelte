<script lang="ts">
	export let label: string;
	export let value: string;
	export let description: string | undefined = undefined;
</script>

<div class="flex flex-col w-full border-t border-t-slate-a6 h-12 justify-center">
	<div class="flex flex-row justify-between w-full items-center">
		<p class="text-sm font-bold">{label}</p>
		<p class="text-sm">{value}</p>
	</div>

	{#if description}
		<p class="text-xs font-light opacity-80">{description}</p>
	{/if}
</div>

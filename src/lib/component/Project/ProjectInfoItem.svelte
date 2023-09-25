<script lang="ts">
	export let label: string;
	export let value: string;
	export let description: string | undefined = undefined;
</script>

<div class="flex flex-row justify-between border-t border-t-slate-a6 items-center h-12">
	<div class="flex flex-col">
		<p class="text-sm font-bold">{label}</p>
		{#if description}
			<p class="text-xs font-light opacity-80">{description}</p>
		{/if}
	</div>

	<p class="text-sm">{value}</p>
</div>

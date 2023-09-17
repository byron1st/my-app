<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let onClick: (() => void | Promise<void>) | undefined = undefined;
	export let ariaLabel: string | undefined = undefined;
</script>

<button
	class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full hover:bg-slate-a4 active:bg-slate-a5"
	on:click={onClick}
	aria-label={ariaLabel}
>
	<slot />
</button>

<script lang="ts">
	import { AlertTriangle } from 'lucide-svelte';

	export let error: Error;
</script>

<div class="flex h-10 w-full flex-row items-center justify-center gap-1 text-red-a11">
	<AlertTriangle size={20} />
	<p class="text-xs">{error.message}</p>
</div>

<script>
	import { fade } from 'svelte/transition';
</script>

<div in:fade={{ delay: 10 }}>
	<slot />
</div>

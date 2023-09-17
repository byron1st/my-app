<script lang="ts">
	import classnames from 'classnames';
</script>

<div
	id={$$props.id}
	class={classnames('rounded-md border border-slate-a7 bg-slate-a3 transition', $$props.class)}
>
	<slot />
</div>

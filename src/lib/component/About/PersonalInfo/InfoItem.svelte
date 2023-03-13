<script>
	export let href = '';
	export let text = '';
</script>

<a
	class="flex w-fit flex-row items-center text-sm hover:underline"
	{href}
	target="_blank"
	rel="noreferrer"
>
	<slot name="icon" />

	<div class="flex flex-row items-center">
		<slot>
			{text}
		</slot>
	</div>
</a>

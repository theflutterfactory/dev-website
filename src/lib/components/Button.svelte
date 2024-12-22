<script lang="ts">
	import type { Button } from '$types/button';

	let { children, className, ...props }: Button = $props();
</script>

<button
	class={`font-inter rounded-lg bg-black px-10 py-4 text-2xl font-medium text-white ${className}`}
	{...props}
>
	{@render children()}
</button>

<script lang="ts">
	import type { Snippet } from 'svelte';

	type Button = {
		children: Snippet;
		onclick: (e: MouseEvent) => void | (() => void);
		className?: string;
	};

	let { children, className, ...props }: Button = $props();
</script>

<button
	class={`rounded-lg bg-black px-10 py-4 font-inter text-2xl font-medium text-white ${className}`}
	{...props}
>
	{@render children()}
</button>

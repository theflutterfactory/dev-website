<script lang="ts">
	import type { Snippet } from 'svelte';

	type Button = {
		children: Snippet;
		onclick: ((e: MouseEvent) => void) | (() => void);
		type?: 'button' | 'submit' | 'reset' | null | undefined;
		className?: string;
	};

	let { children, className, type, ...props }: Button = $props();
</script>

<button
	type={type ?? 'button'}
	class={`rounded-lg bg-slate-300 px-10 py-3 font-inter font-medium drop-shadow-2xl hover:bg-gray-200 md:text-2xl ${className} shadow-md transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50`}
	{...props}
>
	{@render children()}
</button>

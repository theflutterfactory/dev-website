<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		class?: string;
	};

	let { children, class: className, ...props }: Props = $props();
</script>

<div
	class={cn(
		'group relative overflow-hidden rounded-xl border border-white/10 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:border-white/20',
		className
	)}
	{...props}
>
	{@render children()}
</div>

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
	class={cn('rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg', className)}
	{...props}
>
	{@render children()}
</div>

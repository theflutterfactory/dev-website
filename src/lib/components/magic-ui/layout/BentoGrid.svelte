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
		'grid w-full auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 md:grid-cols-3',
		className
	)}
	{...props}
>
	{@render children()}
</div>

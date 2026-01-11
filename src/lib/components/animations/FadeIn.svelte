<script lang="ts">
	import { onMount } from 'svelte';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		class?: string;
		delay?: number;
		duration?: number;
	};

	let { children, class: className, delay = 0, duration = 600, ...props }: Props = $props();

	let isVisible = $state(false);

	onMount(() => {
		setTimeout(() => {
			isVisible = true;
		}, delay);
	});
</script>

<div
	class={cn('transition-opacity', !isVisible && 'opacity-0', isVisible && 'opacity-100', className)}
	style="transition-duration: {duration}ms;"
	{...props}
>
	{@render children()}
</div>

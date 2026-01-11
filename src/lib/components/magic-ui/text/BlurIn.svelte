<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		class?: string;
		duration?: number;
		delay?: number;
	};

	let { children, class: className, duration = 1, delay = 0, ...props }: Props = $props();
</script>

<div
	class={cn('animate-blur-in', className)}
	style="animation-duration: {duration}s; animation-delay: {delay}s; animation-fill-mode: both;"
	{...props}
>
	{@render children()}
</div>

<style>
	@keyframes blur-in {
		from {
			filter: blur(20px);
			opacity: 0;
		}
		to {
			filter: blur(0);
			opacity: 1;
		}
	}

	.animate-blur-in {
		animation: blur-in ease-out;
	}
</style>

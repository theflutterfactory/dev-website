<script lang="ts">
	import { onMount } from 'svelte';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		class?: string;
		threshold?: number;
		delay?: number;
	};

	let { children, class: className, threshold = 0.1, delay = 0, ...props }: Props = $props();

	let elementRef: HTMLDivElement;
	let isVisible = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							isVisible = true;
						}, delay);
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold,
				rootMargin: '0px 0px -100px 0px'
			}
		);

		if (elementRef) {
			observer.observe(elementRef);
		}

		return () => {
			observer.disconnect();
		};
	});
</script>

<div
	bind:this={elementRef}
	class={cn(
		'transition-all duration-1000',
		!isVisible && 'translate-y-10 opacity-0',
		isVisible && 'translate-y-0 opacity-100',
		className
	)}
	{...props}
>
	{@render children()}
</div>

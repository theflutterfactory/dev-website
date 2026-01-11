<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		class?: string;
		reverse?: boolean;
		pauseOnHover?: boolean;
		repeat?: number;
		speed?: number;
	};

	let {
		children,
		class: className,
		reverse = false,
		pauseOnHover = false,
		repeat = 2,
		speed = 40,
		...props
	}: Props = $props();
</script>

<div
	class={cn(
		'group flex overflow-hidden [--duration:40s] [--gap:1rem] [gap:var(--gap)]',
		className
	)}
	style="--duration: {speed}s;"
	{...props}
>
	{#each Array(repeat) as _, i}
		<div
			class={cn(
				'flex shrink-0 justify-around [gap:var(--gap)]',
				reverse ? 'animate-marquee-reverse' : 'animate-marquee',
				pauseOnHover && 'group-hover:[animation-play-state:paused]'
			)}
		>
			{@render children()}
		</div>
	{/each}
</div>

<style>
	@keyframes marquee {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100% - var(--gap)));
		}
	}

	@keyframes marquee-reverse {
		from {
			transform: translateX(calc(-100% - var(--gap)));
		}
		to {
			transform: translateX(0);
		}
	}

	.animate-marquee {
		animation: marquee var(--duration) linear infinite;
	}

	.animate-marquee-reverse {
		animation: marquee-reverse var(--duration) linear infinite;
	}
</style>

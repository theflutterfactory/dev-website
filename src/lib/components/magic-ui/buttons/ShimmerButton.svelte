<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		class?: string;
		shimmerColor?: string;
		shimmerSize?: string;
		borderRadius?: string;
		shimmerDuration?: string;
		background?: string;
		onclick?: (e: MouseEvent) => void;
	};

	let {
		children,
		class: className,
		shimmerColor = '#ffffff',
		background = 'rgba(59, 130, 246, 1)',
		shimmerSize = '0.05em',
		shimmerDuration = '3s',
		borderRadius = '100px',
		onclick,
		...props
	}: Props = $props();
</script>

<button
	class={cn(
		'group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] border border-white/10 px-6 py-3 whitespace-nowrap text-white transition-all duration-300 [background:var(--bg)] hover:scale-105',
		'active:scale-95',
		className
	)}
	style="
		--spread: 90deg;
		--bg: {background};
		--radius: {borderRadius};
		--speed: {shimmerDuration};
		--cut: {shimmerSize};
		--shimmer: {shimmerColor};
	"
	{onclick}
	{...props}
>
	<div
		class="[container-type:size] absolute inset-0 overflow-visible"
		style="
			--shimmer-width: 400%;
			--_bg-size: calc(var(--shimmer-width) * 100%);
			--_spread-angle: 360deg - var(--spread);
		"
	>
		<div
			class="animate-shimmer absolute -inset-[100%] bg-[linear-gradient(var(--spread),transparent_0,var(--shimmer)_50%,transparent_100%)] bg-[length:var(--_bg-size)_100%] bg-[position:calc((100%-var(--shimmer-width))*0.5)_0] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		></div>
	</div>

	<div class="relative z-10 flex items-center gap-2">
		{@render children()}
	</div>

	<div
		class="absolute inset-0 -z-10 rounded-[var(--radius)] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
		style="background: {background};"
	></div>
</button>

<style>
	@keyframes shimmer {
		0% {
			background-position: calc((100% - var(--shimmer-width)) * 0.5) 0;
		}
		100% {
			background-position: calc((100% - var(--shimmer-width)) * 1.5) 0;
		}
	}

	.animate-shimmer {
		animation: shimmer var(--speed) infinite linear;
	}
</style>

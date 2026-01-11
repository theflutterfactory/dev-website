<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		class?: string;
		borderRadius?: number;
		borderWidth?: number;
		duration?: number;
		color?: string | string[];
	};

	let {
		children,
		class: className,
		borderRadius = 8,
		borderWidth = 1,
		duration = 14,
		color = ['#3b82f6', '#22d3ee', '#a855f7'],
		...props
	}: Props = $props();

	const colorArray = Array.isArray(color) ? color : [color];
</script>

<div
	class={cn('relative', className)}
	style="
		--border-radius: {borderRadius}px;
	"
	{...props}
>
	<!-- Animated shine border -->
	<div
		class="pointer-events-none absolute inset-0 overflow-hidden"
		style="border-radius: var(--border-radius);"
	>
		<div
			class="animate-spin-slow absolute inset-[-100%] bg-[conic-gradient(from_90deg_at_50%_50%,{colorArray.join(
				','
			)})]"
			style="animation-duration: {duration}s;"
		></div>
	</div>

	<!-- Inner content with background -->
	<div
		class="relative"
		style="
			margin: {borderWidth}px;
			border-radius: calc(var(--border-radius) - {borderWidth}px);
		"
	>
		{@render children()}
	</div>
</div>

<style>
	@keyframes spin-slow {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.animate-spin-slow {
		animation: spin-slow linear infinite;
	}
</style>

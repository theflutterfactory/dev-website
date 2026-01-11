<script lang="ts">
	import { cn } from '$lib/utils';

	type Props = {
		mainCircleSize?: number;
		mainCircleOpacity?: number;
		numCircles?: number;
		class?: string;
	};

	let {
		mainCircleSize = 210,
		mainCircleOpacity = 0.24,
		numCircles = 8,
		class: className,
		...props
	}: Props = $props();
</script>

<div class={cn('absolute inset-0 flex items-center justify-center', className)} {...props}>
	{#each Array.from({ length: numCircles }, (_, i) => i) as i}
		<div
			class="absolute animate-ripple rounded-full bg-blue-500/25"
			style="
				width: {mainCircleSize + i * 70}px;
				height: {mainCircleSize + i * 70}px;
				opacity: {mainCircleOpacity - i * 0.03};
				animation-delay: {i * 0.06}s;
			"
		></div>
	{/each}
</div>

<style>
	@keyframes ripple {
		0% {
			transform: scale(1);
			opacity: 1;
		}
		100% {
			transform: scale(1.5);
			opacity: 0;
		}
	}

	.animate-ripple {
		animation: ripple 3s cubic-bezier(0, 0, 0.2, 1) infinite;
	}
</style>

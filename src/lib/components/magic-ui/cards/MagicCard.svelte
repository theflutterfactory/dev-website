<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		class?: string;
		gradientSize?: number;
		gradientColor?: string;
		gradientOpacity?: number;
	};

	let {
		children,
		class: className,
		gradientSize = 200,
		gradientColor = '#3b82f6',
		gradientOpacity = 0.8,
		...props
	}: Props = $props();

	let mouseX = $state(0);
	let mouseY = $state(0);

	function handleMouseMove(e: MouseEvent) {
		const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
		mouseX = e.clientX - rect.left;
		mouseY = e.clientY - rect.top;
	}
</script>

<div
	class={cn(
		'group relative overflow-hidden rounded-xl border border-white/10 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:border-white/20',
		className
	)}
	onmousemove={handleMouseMove}
	{...props}
>
	<!-- Gradient spotlight effect -->
	<div
		class="pointer-events-none absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
		style="
			background: radial-gradient(
				{gradientSize}px circle at {mouseX}px {mouseY}px,
				{gradientColor}{Math.round(gradientOpacity * 255).toString(16).padStart(2, '0')},
				transparent 80%
			);
			width: 100%;
			height: 100%;
		"
	></div>

	<!-- Content -->
	<div class="relative z-10">
		{@render children()}
	</div>
</div>

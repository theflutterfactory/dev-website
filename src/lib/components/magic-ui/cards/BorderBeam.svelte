<script lang="ts">
	import { cn } from '$lib/utils';

	type Props = {
		class?: string;
		size?: number;
		duration?: number;
		borderWidth?: number;
		anchor?: number;
		colorFrom?: string;
		colorTo?: string;
		delay?: number;
	};

	let {
		class: className,
		size = 200,
		duration = 15,
		anchor = 90,
		borderWidth = 1.5,
		colorFrom = '#3b82f6',
		colorTo = '#22d3ee',
		delay = 0,
		...props
	}: Props = $props();
</script>

<div
	class={cn(
		'pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]',
		className
	)}
	style="
		--size: {size};
		--duration: {duration};
		--anchor: {anchor};
		--border-width: {borderWidth};
		--color-from: {colorFrom};
		--color-to: {colorTo};
		--delay: -{delay}s;
	"
	{...props}
>
	<div
		class="absolute inset-0 block h-full w-full animate-border-beam [background:linear-gradient(var(--color-from),var(--color-to))] [mask:linear-gradient(transparent_0%,white_50%,transparent_100%)]"
		style="
			width: calc(var(--size) * 1px);
			offset-anchor: calc(var(--anchor) * 1%) 50%;
			offset-path: rect(0 auto auto 0 round calc(var(--size) * 1px));
		"
	></div>
</div>

<style>
	@keyframes border-beam {
		0% {
			offset-distance: 0%;
		}
		100% {
			offset-distance: 100%;
		}
	}

	.animate-border-beam {
		animation: border-beam calc(var(--duration) * 1s) infinite linear;
		animation-delay: var(--delay);
	}
</style>

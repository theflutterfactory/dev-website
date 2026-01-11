<script lang="ts">
	import { cn } from '$lib/utils';

	type Props = {
		width?: number;
		height?: number;
		x?: number;
		y?: number;
		cx?: number;
		cy?: number;
		cr?: number;
		class?: string;
	};

	let {
		width = 16,
		height = 16,
		x = 0,
		y = 0,
		cx = 1,
		cy = 1,
		cr = 1,
		class: className,
		...props
	}: Props = $props();

	const id = `pattern-${Math.random().toString(36).substr(2, 9)}`;
</script>

<svg
	aria-hidden="true"
	class={cn('pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30', className)}
	{...props}
>
	<defs>
		<pattern
			{id}
			{width}
			{height}
			patternUnits="userSpaceOnUse"
			patternContentUnits="userSpaceOnUse"
			{x}
			{y}
		>
			<circle id="pattern-circle" {cx} {cy} r={cr} />
		</pattern>
	</defs>
	<rect width="100%" height="100%" stroke-width="0" fill="url(#{id})" />
</svg>

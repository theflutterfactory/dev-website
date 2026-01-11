<script lang="ts">
	import { cn } from '$lib/utils';

	type Props = {
		class?: string;
		angle?: number;
	};

	let { class: className, angle = 65, ...props }: Props = $props();
</script>

<div
	class={cn(
		'pointer-events-none absolute inset-0 overflow-hidden opacity-50 [perspective:200px]',
		className
	)}
	style="--grid-angle: {angle}deg;"
	{...props}
>
	<div class="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
		<div
			class="animate-grid [inset:0%_0px] [margin-left:-50%] [height:300vh] [width:600vw] [transform-origin:100%_0_0] [background-size:60px_60px] [background-repeat:repeat]"
			style="background-image: linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 0), linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 0);"
		></div>
	</div>

	<div class="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent"></div>
</div>

<style>
	@keyframes grid {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-50%);
		}
	}

	.animate-grid {
		animation: grid 20s linear infinite;
	}
</style>

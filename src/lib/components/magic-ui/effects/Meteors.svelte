<script lang="ts">
	import { cn } from '$lib/utils';

	type Props = {
		number?: number;
		class?: string;
	};

	let { number = 20, class: className, ...props }: Props = $props();

	const meteors = Array.from({ length: number }, (_, i) => ({
		id: i,
		left: `${Math.floor(Math.random() * 100)}%`,
		animationDelay: `${Math.random() * 1 + 0.2}s`,
		animationDuration: `${Math.floor(Math.random() * 8 + 2)}s`
	}));
</script>

<div class={cn('', className)} {...props}>
	{#each meteors as meteor (meteor.id)}
		<span
			class="pointer-events-none absolute left-1/2 top-0 h-px w-px animate-meteor rounded-full bg-blue-500 shadow-[0_0_0_1px_#3b82f6]"
			style="
				left: {meteor.left};
				animation-delay: {meteor.animationDelay};
				animation-duration: {meteor.animationDuration};
			"
		>
			<div
				class="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-blue-500 to-transparent"
			></div>
		</span>
	{/each}
</div>

<style>
	@keyframes meteor {
		0% {
			transform: translateY(-20vh) translateX(-20vw);
			opacity: 1;
		}
		100% {
			transform: translateY(100vh) translateX(100vw);
			opacity: 0;
		}
	}

	.animate-meteor {
		animation: meteor linear infinite;
	}
</style>

<script lang="ts">
	import { cn } from '$lib/utils';

	type Props = {
		words: string;
		class?: string;
		delay?: number;
	};

	let { words, class: className, delay = 0.05, ...props }: Props = $props();

	const letters = words.split('');
</script>

<div class={cn('flex justify-center', className)} {...props}>
	{#each letters as letter, i}
		<span
			class="animate-letter-pull-up inline-block opacity-0"
			style="animation-delay: {i * delay}s; animation-fill-mode: forwards;"
		>
			{letter === ' ' ? '\u00A0' : letter}
		</span>
	{/each}
</div>

<style>
	@keyframes letter-pull-up {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-letter-pull-up {
		animation: letter-pull-up 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
	}
</style>

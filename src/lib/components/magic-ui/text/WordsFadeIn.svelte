<script lang="ts">
	import { cn } from '$lib/utils';

	type Props = {
		words: string;
		class?: string;
		delay?: number;
	};

	let { words, class: className, delay = 0.15, ...props }: Props = $props();

	const wordsArray = words.split(' ');
</script>

<div class={cn('flex flex-wrap gap-x-2', className)} {...props}>
	{#each wordsArray as word, i}
		<span
			class="animate-fade-in inline-block opacity-0"
			style="animation-delay: {i * delay}s; animation-fill-mode: forwards;"
		>
			{word}
		</span>
	{/each}
</div>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 0.6s ease-out;
	}
</style>

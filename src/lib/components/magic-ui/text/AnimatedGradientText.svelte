<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
		class?: string;
	};

	let { children, class: className, ...props }: Props = $props();
</script>

<div
	class={cn(
		'group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40',
		className
	)}
	{...props}
>
	<div
		class="animate-gradient absolute inset-0 block h-full w-full [border-radius:inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"
		style="padding: 1px; -webkit-mask-composite: xor; mask-composite: exclude;"
	></div>
	{@render children()}
</div>

<style>
	@keyframes gradient {
		to {
			background-position: var(--bg-size) 0;
		}
	}

	.animate-gradient {
		animation: gradient 8s linear infinite;
	}
</style>

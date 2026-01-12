<script lang="ts">
	import { formatDate } from '$lib/utils/format';
	import DotPattern from '$lib/components/magic-ui/backgrounds/DotPattern.svelte';
	import MagicCard from '$lib/components/magic-ui/cards/MagicCard.svelte';
	import GlassCard from '$lib/components/shared/GlassCard.svelte';
	import TechBadge from '$lib/components/projects/TechBadge.svelte';
	import ScrollReveal from '$lib/components/animations/ScrollReveal.svelte';

	let { data } = $props();

	const { name, company, dateCompleted, stack, imageUrl, content } = data.project;

	const imageBlocks = content.filter((block): block is FormattedImageContent => block.type === 'image');
	const textBlocks = content.filter(
		(block): block is FormattedTextContent => block.type === 'text' && block.textToRender.trim().length > 0
	);

	const groupedContent: Array<{ heading?: FormattedTextContent; content: FormattedTextContent[] }> =
		[];
	let currentGroup: { heading?: FormattedTextContent; content: FormattedTextContent[] } = {
		content: []
	};

	textBlocks.forEach((block) => {
		const isHeading = block.style !== 'normal' && block.style !== 'blockquote';

		if (isHeading) {
			if (currentGroup.heading || currentGroup.content.length > 0) {
				groupedContent.push(currentGroup);
			}
			currentGroup = { heading: block, content: [] };
		} else {
			currentGroup.content.push(block);
		}
	});

	if (currentGroup.heading || currentGroup.content.length > 0) {
		groupedContent.push(currentGroup);
	}

	function getTagFromStyle(style: FormattedTextContent['style']): string {
		if (style === 'normal') {
			return 'p';
		} else {
			return style;
		}
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<section
	class="relative -mx-4 -mt-8 mb-16 flex min-h-[60vh] items-end overflow-hidden md:-mx-[16vw]"
>
	<DotPattern class="absolute inset-0 opacity-[0.15]" width={20} height={20} cr={1} />

	<div class="absolute inset-0">
		<img src={imageUrl} alt={name} class="h-full w-full object-cover" />
		<div
			class="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/20"
		></div>
	</div>

	<div class="relative z-10 w-full px-4 pb-12 md:px-[16vw]">
		<div class="mb-8">
			<a
				href="/#my-projects"
				class="group inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-blue-400"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 transition-transform group-hover:-translate-x-1"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
						clip-rule="evenodd"
					/>
				</svg>
				<span>Back to Projects</span>
			</a>
		</div>

		<div class="mb-3 inline-block rounded-full bg-blue-500/20 px-4 py-1.5 backdrop-blur-sm">
			<span class="text-sm font-medium text-blue-300">{company}</span>
		</div>
		<h1
			class="mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-5xl font-bold text-transparent md:text-7xl"
		>
			{name}
		</h1>
	</div>
</section>

<div class="pb-24">
	<div class="grid gap-12 lg:grid-cols-3">
		<aside class="lg:col-span-1">
			<div class="sticky top-24 space-y-6">
				{#if imageBlocks.length > 0}
					{#each imageBlocks as imageBlock, i}
						<ScrollReveal delay={i * 50}>
							<MagicCard class="overflow-hidden">
								<img
									src={imageBlock.url}
									alt="Project screenshot {i + 1}"
									class="h-auto w-full object-cover"
								/>
							</MagicCard>
						</ScrollReveal>
					{/each}
				{/if}

				<ScrollReveal delay={imageBlocks.length * 50}>
					<GlassCard class="p-6">
						<div class="mb-2 flex items-center gap-2 text-blue-400">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
									clip-rule="evenodd"
								/>
							</svg>
							<h3 class="font-semibold">Completed</h3>
						</div>
						<p class="text-2xl font-bold text-white">{formatDate(dateCompleted)}</p>
					</GlassCard>
				</ScrollReveal>

				<ScrollReveal delay={imageBlocks.length * 50 + 100}>
					<GlassCard class="p-6">
						<div class="mb-4 flex items-center gap-2 text-blue-400">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
									clip-rule="evenodd"
								/>
							</svg>
							<h3 class="font-semibold">Tech Stack</h3>
						</div>
						<div class="flex flex-wrap gap-2">
							{#each stack as tech, i}
								<TechBadge {tech} index={i} />
							{/each}
						</div>
					</GlassCard>
				</ScrollReveal>

				<button
					onclick={scrollToTop}
					class="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-gray-300 backdrop-blur-lg transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-400"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
					Back to Top
				</button>
			</div>
		</aside>

		<main class="lg:col-span-2">
			<ScrollReveal>
				<div class="space-y-8">
					{#each groupedContent as group, i}
						<GlassCard class="p-8">
							{#if group.heading}
								<svelte:element
									this={getTagFromStyle(group.heading.style)}
									class={group.heading.style === 'h1'
										? 'mb-6 text-4xl font-bold text-white'
										: group.heading.style === 'h2'
											? 'mb-5 text-3xl font-bold text-white'
											: group.heading.style === 'h3'
												? 'mb-4 text-2xl font-semibold text-white'
												: 'mb-4 text-xl font-semibold text-white'}
								>
									{group.heading.textToRender}
								</svelte:element>
							{/if}

							<div class="space-y-4">
								{#each group.content as block}
									<svelte:element
										this={getTagFromStyle(block.style)}
										class={block.style === 'normal'
											? 'text-lg leading-relaxed text-gray-300'
											: block.style === 'blockquote'
												? 'border-l-4 border-blue-400 pl-4 text-gray-400 italic'
												: 'text-gray-300'}
									>
										{block.textToRender}
									</svelte:element>
								{/each}
							</div>
						</GlassCard>
					{/each}
				</div>
			</ScrollReveal>
		</main>
	</div>
</div>

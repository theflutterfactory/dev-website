<script lang="ts">
	import { onMount } from 'svelte';
	import MagicCard from '$lib/components/magic-ui/cards/MagicCard.svelte';
	import Meteors from '$lib/components/magic-ui/effects/Meteors.svelte';

	type Props = {
		project: FormattedProject;
		delay?: number;
	};

	let { project, delay = 0 }: Props = $props();
	let isVisible = $state(false);
	let elementRef: HTMLDivElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							isVisible = true;
						}, delay);
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.1
			}
		);

		if (elementRef) {
			observer.observe(elementRef);
		}

		return () => {
			observer.disconnect();
		};
	});
</script>

<div
	bind:this={elementRef}
	class="transition-all duration-700"
	class:opacity-0={!isVisible}
	class:translate-y-10={!isVisible}
	class:opacity-100={isVisible}
	class:translate-y-0={isVisible}
>
	<a href={`/projects/${project.slug}`} class="block h-full">
		<MagicCard class="group relative h-full overflow-hidden p-0">
			<Meteors number={15} class="absolute inset-0" />

			<div class="relative h-full">
				<div class="relative h-96 overflow-hidden md:h-[450px]">
					<img
						src={project.imageUrl}
						alt={project.name}
						class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"
					></div>
				</div>

				<div class="absolute right-0 bottom-0 left-0 p-8">
					<div class="mb-2 inline-block rounded-full bg-blue-500/20 px-4 py-1 backdrop-blur-sm">
						<span class="text-sm font-medium text-blue-300">Featured Project</span>
					</div>

					<h3
						class="mb-3 text-3xl font-bold text-white transition-colors group-hover:text-blue-400 md:text-4xl"
					>
						{project.name}
					</h3>

					<p class="mb-6 text-lg text-gray-300">{project.company}</p>

					<div
						class="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm transition-all duration-300 group-hover:border-blue-400/50 group-hover:bg-blue-500/20"
					>
						<span class="font-medium text-white">View Full Project</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-blue-400 transition-transform group-hover:translate-x-2"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
				</div>
			</div>
		</MagicCard>
	</a>
</div>

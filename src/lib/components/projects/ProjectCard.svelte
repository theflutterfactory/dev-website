<script lang="ts">
	import { onMount } from 'svelte';
	import MagicCard from '$lib/components/magic-ui/cards/MagicCard.svelte';

	type Props = {
		project: FormattedProject;
		index: number;
		delay?: number;
	};

	let { project, index, delay = 0 }: Props = $props();
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
		<MagicCard class="group h-full overflow-hidden p-0">
			<div class="relative h-full">
				<div class="relative h-64 overflow-hidden">
					<img
						src={project.imageUrl}
						alt={project.name}
						class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
					/>
					<div
						class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60"
					></div>
				</div>

				<div class="relative p-6">
					<h3 class="mb-2 text-xl font-bold text-white transition-colors group-hover:text-blue-400">
						{project.name}
					</h3>
					<p class="mb-4 text-sm text-gray-400">{project.company}</p>

					<div
						class="inline-flex items-center gap-2 text-blue-400 transition-transform group-hover:translate-x-2"
					>
						<span class="text-sm font-medium">View Project</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4"
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

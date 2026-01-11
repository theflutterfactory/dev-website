<script lang="ts">
	import ScrollReveal from '$lib/components/animations/ScrollReveal.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import BentoGrid from '$lib/components/magic-ui/layout/BentoGrid.svelte';
	import BentoCard from '$lib/components/magic-ui/layout/BentoCard.svelte';
	import FeaturedProject from '$lib/components/projects/FeaturedProject.svelte';
	import ProjectCard from '$lib/components/projects/ProjectCard.svelte';

	type Props = {
		projects: FormattedProject[];
	};

	let { projects }: Props = $props();
	const featuredProject = projects[0];
	const otherProjects = projects.slice(1);
</script>

<section class="py-24">
	<ScrollReveal>
		<SectionHeader sectionName="my-projects">My Projects</SectionHeader>

		<div class="mt-16">
			<!-- Featured Project - Full Width -->
			{#if featuredProject}
				<div class="mb-8">
					<FeaturedProject project={featuredProject} delay={0} />
				</div>
			{/if}

			<!-- Bento Grid for Other Projects -->
			{#if otherProjects.length > 0}
				<BentoGrid class="gap-6">
					{#each otherProjects as project, i}
						<BentoCard
							class={i === 0
								? 'md:col-span-2'
								: i === otherProjects.length - 1 && otherProjects.length % 3 === 1
									? 'md:col-span-3'
									: ''}
						>
							<ProjectCard {project} index={i + 1} delay={(i + 1) * 100} />
						</BentoCard>
					{/each}
				</BentoGrid>
			{/if}
		</div>
	</ScrollReveal>
</section>

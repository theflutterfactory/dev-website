<script lang="ts">
	import ScrollReveal from '$lib/components/animations/ScrollReveal.svelte';
	import ExperienceCard from '$lib/components/experience/ExperienceCard.svelte';
	import { SectionHeader } from '$components';

	type Props = {
		workExperience: DevExperience[];
	};

	let { workExperience }: Props = $props();
</script>

<section class="py-24">
	<ScrollReveal>
		<SectionHeader sectionName="experience">Work Experience</SectionHeader>

		<div class="mx-auto mt-16 max-w-4xl">
			{#each workExperience as job, i}
				<ExperienceCard {job} index={i} delay={i * 100} />
			{/each}
		</div>
	</ScrollReveal>
</section>

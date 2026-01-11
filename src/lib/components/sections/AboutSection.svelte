<script lang="ts">
	import MagicCard from '$lib/components/magic-ui/cards/MagicCard.svelte';
	import ShimmerButton from '$lib/components/magic-ui/buttons/ShimmerButton.svelte';
	import ScrollReveal from '$lib/components/animations/ScrollReveal.svelte';
	import GlassCard from '$lib/components/shared/GlassCard.svelte';
	import { SectionHeader } from '$components';
	import image from '$assets/me.jpg';

	type Props = {
		aboutMe: AboutMe[];
	};

	let { aboutMe }: Props = $props();

	function onclick() {
		const projectsSection = document.getElementById('my-projects');
		if (projectsSection) {
			projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
</script>

<section class="py-24">
	<ScrollReveal>
		<SectionHeader sectionName="about-me">About Me</SectionHeader>

		<div class="mt-16 grid items-center gap-12 md:grid-cols-2">
			<div class="relative">
				<MagicCard class="overflow-hidden p-0">
					<img src={image} alt="Julian Currie" class="h-auto w-full rounded-xl object-cover" />
				</MagicCard>

				<div class="absolute -right-6 -bottom-6 gap-4 md:grid">
					<GlassCard class="p-4 text-center">
						<div class="text-3xl font-bold text-blue-400">10+</div>
						<div class="text-sm text-gray-400">Years Exp.</div>
					</GlassCard>
				</div>
			</div>

			<div class="relative">
				<GlassCard class="p-8">
					<div class="space-y-4 text-lg leading-relaxed text-gray-300">
						{aboutMe}
					</div>

					<div class="mt-8">
						<ShimmerButton {onclick} class="px-6 py-3">View Projects</ShimmerButton>
					</div>
				</GlassCard>
			</div>
		</div>
	</ScrollReveal>
</section>

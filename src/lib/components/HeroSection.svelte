<script lang="ts">
	import DotPattern from '$lib/components/magic-ui/backgrounds/DotPattern.svelte';
	import Particles from '$lib/components/magic-ui/backgrounds/Particles.svelte';
	import ShimmerButton from '$lib/components/magic-ui/buttons/ShimmerButton.svelte';
	import WordsFadeIn from '$lib/components/magic-ui/text/WordsFadeIn.svelte';

	function onclick() {
		const contactSection = document.getElementById('contact-form');
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
</script>

<section
	class="relative -mx-4 flex min-h-screen items-center justify-center overflow-hidden md:-mx-[16vw]"
>
	<DotPattern class="absolute inset-0 opacity-[0.15]" width={20} height={20} cr={1} />

	<Particles class="absolute inset-0" quantity={20} staticity={30} />

	<div class="relative z-10 mx-auto max-w-5xl px-4 text-center">
		<h1 class="mb-8 text-6xl font-bold md:text-8xl">
			<span
				class="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
			>
				Julian Currie
			</span>
		</h1>

		<div class="mx-auto mb-12 max-w-3xl space-y-2">
			<WordsFadeIn
				words="Senior Software Engineer with experience in several"
				class="text-2xl font-light text-gray-300 md:text-3xl"
			/>
			<WordsFadeIn
				words="Mobile and Web frameworks."
				class="text-2xl font-light text-gray-500 md:text-3xl"
				delay={0.2}
			/>
		</div>

		<ShimmerButton {onclick} class="px-8 py-4 text-lg font-semibold">Let's Talk</ShimmerButton>
	</div>
</section>

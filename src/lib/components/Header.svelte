<script lang="ts">
	import logo from '$assets/ff.png';
	import { onMount } from 'svelte';

	let scrolled = $state(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav
	class="fixed top-0 right-0 left-0 z-50 flex justify-between px-4 py-4 transition-all duration-300 md:px-16
		{scrolled ? 'border-b border-white/10 bg-black/80 shadow-lg backdrop-blur-xl' : 'bg-transparent'}"
>
	<img class="size-8 object-cover md:size-14" src={logo} alt="flutter factory" />
	<div class="flex items-center gap-4 md:gap-14">
		<a
			href="/#about-me"
			class="text-white transition-all duration-300 hover:scale-110 hover:text-blue-400"
		>
			About Me
		</a>
		<a
			href="/#my-projects"
			class="text-white transition-all duration-300 hover:scale-110 hover:text-blue-400"
		>
			Work
		</a>
		<a
			href="/#contact-form"
			class="text-white transition-all duration-300 hover:scale-110 hover:text-blue-400"
		>
			Contact
		</a>
	</div>
</nav>

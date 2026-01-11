<script lang="ts">
	import logo from '$assets/ff.png';
	import { onMount } from 'svelte';

	let scrolled = $state(false);
	let hidden = $state(false);
	let lastScrollY = 0;

	onMount(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			scrolled = currentScrollY > 50;

			if (currentScrollY > lastScrollY && currentScrollY > 100) {
				hidden = true;
			} else if (currentScrollY < lastScrollY) {
				hidden = false;
			}

			if (currentScrollY < 50) {
				hidden = false;
			}

			lastScrollY = currentScrollY;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<nav
	class="fixed right-0 left-0 z-50 flex justify-between px-4 py-4 transition-all duration-300 md:px-16
		{scrolled ? 'border-b border-white/10 bg-black/80 shadow-lg backdrop-blur-xl' : 'bg-transparent'}
		{hidden ? '-translate-y-full' : 'translate-y-0'}"
	style="top: 0;"
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

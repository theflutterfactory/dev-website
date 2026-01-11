<script lang="ts">
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{
			name: 'GitHub',
			href: 'https://github.com/theflutterfactory',
			icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
		},
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/in/juliancurrie',
			icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
		},
		{
			name: 'Bluesky',
			href: 'https://bsky.app/profile/juliancurrie.bsky.social',
			icon: 'M12 10.5c-3.037-2.5-5.5-5.5-5.5-8C6.5.846 8.346-.5 10-.5c1.38 0 2 .5 2 .5s.62-.5 2-.5c1.654 0 3.5 1.346 3.5 3 0 2.5-2.463 5.5-5.5 8zm0 2c3.037 2.5 5.5 5.5 5.5 8 0 2.654-1.846 4-3.5 4-1.38 0-2-.5-2-.5s-.62.5-2 .5c-1.654 0-3.5-1.346-3.5-4 0-2.5 2.463-5.5 5.5-8z'
		}
	];
</script>

<footer class="relative border-t border-white/10 bg-gradient-to-b from-gray-950 to-black py-12">
	<div class="mx-auto max-w-6xl px-4">
		<div class="mb-8 text-center">
			<h2
				class="mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-3xl font-bold text-transparent"
			>
				Julian Currie
			</h2>

			<div class="mb-8 flex justify-center gap-4">
				{#each socialLinks as link}
					<a
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						class="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-blue-400/50 hover:bg-blue-500/10"
						aria-label={link.name}
					>
						<svg
							class="h-5 w-5 text-gray-400 transition-colors duration-300 group-hover:text-blue-400"
							fill="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d={link.icon} />
						</svg>

						<div
							class="absolute inset-0 -z-10 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
							style="background: rgba(59, 130, 246, 0.3);"
						></div>
					</a>
				{/each}
			</div>

			<div class="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
				<a href="/#about" class="text-gray-400 transition-colors duration-300 hover:text-blue-400">
					About
				</a>
				<a
					href="/#experience"
					class="text-gray-400 transition-colors duration-300 hover:text-blue-400">Experience</a
				>
				<a
					href="/#my-projects"
					class="text-gray-400 transition-colors duration-300 hover:text-blue-400">Projects</a
				>
				<a href="/#skills" class="text-gray-400 transition-colors duration-300 hover:text-blue-400">
					Skills
				</a>
				<a
					href="/#contact-form"
					class="text-gray-400 transition-colors duration-300 hover:text-blue-400">Contact</a
				>
			</div>
		</div>

		<div class="mb-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

		<p class="text-center text-sm text-gray-400">
			© {currentYear} Julian Currie. All rights reserved.
		</p>
	</div>

	<div
		class="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-transparent"
	></div>
</footer>

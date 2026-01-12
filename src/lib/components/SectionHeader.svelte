<script lang="ts">
	import type { Snippet } from 'svelte';

	type SectionHeader = {
		children: Snippet;
		sectionName: string;
	};

	let { children, sectionName }: SectionHeader = $props();
</script>

<div id={sectionName} class="mb-8 text-center">
	<h2
		class="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
	>
		{@render children()}
	</h2>
	<div class="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
</div>

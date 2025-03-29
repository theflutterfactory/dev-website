<script lang="ts">
	import type { Snippet } from 'svelte';

	type SectionHeader = {
		children: Snippet;
		sectionName: string;
	};

	let { children, sectionName }: SectionHeader = $props();
</script>

<div id={sectionName} class="header-container">
	<h3>{@render children()}</h3>
</div>

<script lang="ts">
	import type { Snippet } from 'svelte';

	type SectionHeader = {
		children: Snippet;
		sectionName: string;
	};

	let { children, sectionName }: SectionHeader = $props();
</script>

<div id={sectionName}>
	<h3><span>{@render children()}</span></h3>
</div>

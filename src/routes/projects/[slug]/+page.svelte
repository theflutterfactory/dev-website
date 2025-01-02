<script lang="ts">
	let { data } = $props();

	const { name, company, dateCompleted, stack, imageUrl, content } = data.project;

	function getTagFromStyle(style: FormattedTextContent['style']): string {
		if (style === 'normal') {
			return 'p';
		} else {
			return style;
		}
	}
</script>

<main class="mt-8">
	<h4>{company}</h4>
	<h2 class="mb-4">{name}</h2>
	<img class="max-h-[450px] w-full rounded-xl object-cover" src={imageUrl} alt="main-project" />
	<div class="mt-8 flex">
		<div class="min-w-60">
			<h2>Date</h2>
			<p>{dateCompleted}</p>
			<h2>Tech Stack</h2>
			<ul>
				{#each stack as skill}
					<li>{skill}</li>
				{/each}
			</ul>
		</div>
		<div>
			{#each content as block}
				{#if block.type === 'text'}
					<svelte:element this={getTagFromStyle(block.style)}>
						{block.textToRender}
					</svelte:element>
				{:else}
					<img class="size-20" src={block.url} alt="project" />
				{/if}
			{/each}
		</div>
	</div>
</main>

<script lang="ts">
	import { formatDate } from '$lib/utils/format';

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
	<div class="mt-8 flex flex-col md:flex-row">
		<div class="flex min-w-60 flex-row justify-around md:flex-col md:justify-normal">
			<div class="flex flex-col">
				<h2>Date</h2>
				<p class="text-white">{formatDate(dateCompleted)}</p>
			</div>
			<div class="flex flex-col">
				<h2>Tech Stack</h2>
				<ul>
					{#each stack as skill}
						<li class="text-white">{skill}</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="text-white/90">
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

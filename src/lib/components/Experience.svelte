<script lang="ts">
	type ExperienceProps = {
		workExperience: DevExperience[];
	};

	let { workExperience }: ExperienceProps = $props();
</script>

<section class="mt-8 flex justify-between">
	<ul class="w-1/2">
		{#each workExperience as item}
			<li class="[&:not(:first-of-type)]:color border-b border-solid pt-4">
				<article>
					<h2 class="mb-2">{item.jobTitle}</h2>
					<div class="flex justify-between">
						<p class="mb-0">{item.company}</p>
						<p>
							{item.startDate}
							{#if item.endDate}
								- {item.endDate}
							{:else}
								- present
							{/if}
						</p>
					</div>
				</article>
			</li>
		{/each}
	</ul>
	<h1 class="self-center text-center">Work Experience</h1>
</section>

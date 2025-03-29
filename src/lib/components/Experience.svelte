<script lang="ts">
	import { formatDate } from '$lib/utils/format';

	type ExperienceProps = {
		workExperience: DevExperience[];
	};

	let { workExperience }: ExperienceProps = $props();
</script>

<section class="mt-8 flex flex-col justify-between md:flex-row">
	<h1 class="block self-center pb-4 text-center md:hidden">Work Experience</h1>
	<ul>
		{#each workExperience as item}
			<li class="border-b border-white/20 pt-4 last-of-type:border-none">
				<article>
					<h2 class="mb-2">{item.jobTitle}</h2>
					<div class="flex flex-col justify-between md:flex-row">
						<a class="mb-0 text-blue-700 hover:underline" href={item.link}>{item.company}</a>
						<p class="text-white">
							{formatDate(item.startDate)}
							{#if item.endDate}
								- {formatDate(item.endDate)}
							{:else}
								- present
							{/if}
						</p>
					</div>
				</article>
			</li>
		{/each}
	</ul>
	<h1 class="hidden self-center text-center md:block">Work<br />Experience</h1>
</section>

<script lang="ts">
	type Experience = {
		jobTitle: string;
		company: string;
		startDate: string;
		endDate: string;
	};

	const experience: Experience[] = [
		{
			jobTitle: 'Senior Software Engineer - Flutter',
			company: 'Very Good Ventures',
			startDate: 'Aug 2022',
			endDate: ''
		},
		{
			jobTitle: 'Lead Software Engineer - Flutter',
			company: 'Willow Innovations',
			startDate: 'Aug 2021',
			endDate: 'Aug 2022'
		},
		{
			jobTitle: 'Senior Mobile Engineer (Contract) - Flutter',
			company: 'Codeifai (previously YPB Group)',
			startDate: 'Jan 2021',
			endDate: 'July 2021'
		},
		{
			jobTitle: 'Youtube Content Creator - Flutter Tutorials',
			company: 'The Flutter Factory',
			startDate: 'Jan 2018',
			endDate: 'Jan 2021'
		},
		{
			jobTitle: 'Senior Android Engineer',
			company: 'Capital One',
			startDate: 'Feb 2014',
			endDate: 'Sep 2017'
		}
	];
</script>

<section class="mt-8 flex justify-between">
	<ul class="w-1/2">
		{#each experience as item}
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
	<h2>Experience</h2>
	<ul></ul>
</section>

<script lang="ts">
	import { onMount } from 'svelte';
	import ShineBorder from '$lib/components/magic-ui/cards/ShineBorder.svelte';
	import { formatDate } from '$lib/utils/format';

	type Props = {
		job: DevExperience;
		index: number;
		delay?: number;
	};

	let { job, index, delay = 0 }: Props = $props();
	let isVisible = $state(false);
	let elementRef: HTMLDivElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							isVisible = true;
						}, delay);
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.1
			}
		);

		if (elementRef) {
			observer.observe(elementRef);
		}

		return () => {
			observer.disconnect();
		};
	});
</script>

<div
	bind:this={elementRef}
	class="mb-8 transition-all duration-700"
	class:opacity-0={!isVisible}
	class:translate-y-10={!isVisible}
	class:opacity-100={isVisible}
	class:translate-y-0={isVisible}
>
	<ShineBorder
		borderRadius={12}
		borderWidth={1}
		duration={12}
		color={['#3b82f6', '#22d3ee', '#8b5cf6']}
	>
		<div class="rounded-xl bg-gray-900/80 p-6 backdrop-blur-sm">
			<div class="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
				<div>
					<h3 class="mb-2 text-2xl font-bold text-white">{job.jobTitle}</h3>
					<a
						href={job.link}
						class="text-blue-400 transition-colors hover:text-blue-300 hover:underline"
						target="_blank"
						rel="noopener noreferrer"
					>
						{job.company}
					</a>
				</div>

				<div class="mt-2 text-sm text-gray-400 md:mt-0 md:text-right md:text-base">
					<div>{formatDate(job.startDate)}</div>
					<div>-</div>
					<div>{job.endDate ? formatDate(job.endDate) : 'Present'}</div>
				</div>
			</div>
		</div>
	</ShineBorder>
</div>

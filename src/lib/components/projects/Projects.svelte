<script lang="ts">
	import { ProjectImage, SectionHeader } from '$components';
	import ProjectInfo from './ProjectInfo.svelte';

	type ProjectsProps = {
		projects: FormattedProject[];
	};

	let { projects }: ProjectsProps = $props();
	const latestProject = projects[0];
</script>

<section class="pt-6">
	<SectionHeader sectionName="my-projects">My Projects</SectionHeader>
	<article class="pt-8">
		<ProjectImage project={latestProject} extraClasses="h-[450px]" />
		<ProjectInfo project={latestProject} />
	</article>
	<div class="justify-between md:flex">
		{#each projects.slice(1) as project}
			<article class="md:w-[49%]">
				<ProjectImage {project} extraClasses="h-80" />
				<ProjectInfo {project} />
			</article>
		{/each}
	</div>
</section>

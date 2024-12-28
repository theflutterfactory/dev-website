<script lang="ts">
	import { ProjectImage, SectionHeader } from '$components';
	import ProjectInfo from './ProjectInfo.svelte';

	type ProjectsProps = {
		projects: FormattedProject[];
	};

	let { projects }: ProjectsProps = $props();
	const latestProject = projects[0];
	console.log(projects);
</script>

<section class="pt-6">
	<SectionHeader sectionName="my-projects">My Projects</SectionHeader>
	<article class="pt-8">
		<ProjectImage project={latestProject} extraClasses="h-[450px]" />
		<ProjectInfo project={latestProject} />
	</article>
	<div class="flex flex-wrap justify-between">
		{#each projects.slice(1) as project}
			<article class="w-[49%]">
				<ProjectImage {project} extraClasses="h-80" />
				<ProjectInfo {project} />
			</article>
		{/each}
	</div>
</section>

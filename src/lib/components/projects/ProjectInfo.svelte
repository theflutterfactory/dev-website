<script lang="ts">
	type ProjectProps = {
		project: FormattedProject;
	};

	let { project }: ProjectProps = $props();
</script>

<div class="my-4 flex items-center justify-between">
	<div>
		<h2>{project.name}</h2>
		<p class="text-white">{project.company}</p>
	</div>
	<a
		href={`/projects/${project.slug}`}
		class="text-md mb-2 me-2 rounded-full bg-gray-800 px-6 py-2.5 text-white transition-all duration-300 hover:scale-105 hover:bg-gray-700"
	>
		→
	</a>
</div>

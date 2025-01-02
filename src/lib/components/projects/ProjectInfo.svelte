<script lang="ts">
	type ProjectProps = {
		project: FormattedProject;
	};

	let { project }: ProjectProps = $props();
</script>

<div class="my-4 flex items-center justify-between">
	<div>
		<h2>{project.name}</h2>
		<p>{project.company}</p>
	</div>
	<a
		href={`/projects/${project.slug}`}
		class="text-md f mb-2 me-2 rounded-full border bg-gray-800 px-6 py-2.5 text-white hover:bg-gray-700"
	>
		→
	</a>
</div>

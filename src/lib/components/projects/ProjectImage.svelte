<script lang="ts">
	type ProjectProps = {
		project: FormattedProject;
		extraClasses?: string;
	};

	let { project, extraClasses }: ProjectProps = $props();
</script>

<a href={`/projects/${project.slug}`}>
	<img
		class={`w-full cursor-pointer rounded-[20px] bg-slate-100 object-cover shadow-lg transition-shadow duration-300 hover:shadow-blue-500/50 ${extraClasses}`}
		src={project.imageUrl}
		alt={project.name}
	/>
</a>

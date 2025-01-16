<script lang="ts">
	type ProjectProps = {
		project: FormattedProject;
		extraClasses?: string;
	};

	let { project, extraClasses }: ProjectProps = $props();
</script>

<a href={`/projects/${project.slug}`}>
	<img
		class={`w-full cursor-pointer rounded-[20px] bg-slate-100 object-cover shadow-lg ${extraClasses}`}
		src={project.imageUrl}
		alt={project.name}
	/>
</a>

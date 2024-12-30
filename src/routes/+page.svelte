<script lang="ts">
	import { AboutMe, HeroSection, Projects } from '$components';
	import Skills from '$components/Skills.svelte';

	const { data } = $props();
	let { workExperience, projects, skills } = data;
</script>

<HeroSection />
<AboutMe {workExperience} />
<Projects {projects} />
<Skills {skills} />

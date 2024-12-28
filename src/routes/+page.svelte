<script lang="ts">
	import { AboutMe, HeroSection, Projects } from '$components';

	const { data } = $props();
	let { workExperience, projects } = data;
</script>

<HeroSection />
<AboutMe {workExperience} />
<Projects {projects} />

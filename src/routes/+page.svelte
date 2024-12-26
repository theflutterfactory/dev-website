<script lang="ts">
	import { AboutMe, HeroSection } from '$components';

	const { data } = $props();
	let { workExperience } = data;
</script>

<HeroSection />
<AboutMe {workExperience} />

<script lang="ts">
	import { Button, Experience, SectionHeader } from '$components';
	import image from '$assets/me.jpg';
	import { goto } from '$app/navigation';

	type AboutMeProps = {
		aboutMe: AboutMe[];
		workExperience: DevExperience[];
	};

	let { workExperience, aboutMe }: AboutMeProps = $props();

	function onclick() {
		goto('/#my-projects');
	}
</script>

<section class="mt-16">
	<SectionHeader sectionName="about-me">About Me</SectionHeader>
	<div class="mt-6 flex flex-col md:flex-row md:space-x-16">
		<img class="object-cover shadow-md md:w-1/3" src={image} alt="author" />
		<div class="text-left">
			<div class="text-lg text-white/90">
				{aboutMe}
			</div>
			<Button {onclick} className="mt-8">View Projects</Button>
		</div>
	</div>
	<Experience {workExperience} />
</section>

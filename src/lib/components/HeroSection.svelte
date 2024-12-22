<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button, SectionHeader } from '$components';

	function onclick() {
		goto('/#contact');
	}
</script>

<section class="mx-[16vw] pt-16">
	<SectionHeader sectionName="intro">Hello! I'm Julian</SectionHeader>
	<div class="mb-8"></div>
	<h1>I'm a Senior Software Engineer with experience in several</h1>
	<h1 class="mb-4 text-[#656464]">Mobile and Web frameworks.</h1>
	<Button {onclick}>Contact me</Button>
</section>

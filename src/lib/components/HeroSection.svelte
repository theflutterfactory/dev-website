<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button, SectionHeader } from '$components';

	function onclick() {
		goto('/#contact-form');
	}
</script>

<section class="pt-16">
	<SectionHeader sectionName="intro">Hello! I'm Julian</SectionHeader>
	<div class="mb-8"></div>
	<h1>Senior Software Engineer with experience in several</h1>
	<h1 class="mb-4 text-[#656464]">Mobile and Web frameworks.</h1>
	<Button {onclick}>Let's Talk</Button>
</section>

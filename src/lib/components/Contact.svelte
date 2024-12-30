<script lang="ts">
	import { Button, SectionHeader } from '$components';

	let { spinner } = $props();

	function onSubmit(event: Event) {
		event.preventDefault();
	}
</script>

<section class="mt-4">
	<SectionHeader sectionName="contact-form">Contact Me</SectionHeader>
	<div class="mt-8 flex justify-between">
		<div class="w-2/3">
			<h2>Tell me about your project</h2>
			<p>
				Whether it's building a small project from scratch or working on an existing codebase with a
				large team, I'm always excited to dig into some code. Feel free to reach out to me and let's
				create something special.
			</p>
		</div>
		<form>
			<input placeholder="Name" />
			<input placeholder="Email" />
			<textarea placeholder="Message"></textarea>
			<Button onclick={onSubmit}>{@render spinner()}</Button>
		</form>
	</div>
</section>

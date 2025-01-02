<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$components';

	function goToContactForm() {
		goto('#contact-form');
	}
</script>

<nav class="flex items-center justify-between p-5">
	<a href="/" class="text-4xl font-bold">NF</a>
	<div class="flex items-center gap-14">
		<a href="/#about-me" class="hover:underline">About Me</a>
		<a href="/#my-projects" class="hover:underline">Work</a>
		<Button onclick={goToContactForm} className="nav-bar">Contact</Button>
	</div>
</nav>

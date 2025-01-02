<script lang="ts">
	import { goto } from '$app/navigation';
	import logo from '$assets/ff.png';
</script>

<nav class="flex items-center justify-between bg-black px-16 py-4">
	<img class="size-14 object-cover" src={logo} alt="flutter factory" />
	<div class="flex items-center gap-14">
		<a href="/#about-me" class="text-white hover:underline">About Me</a>
		<a href="/#my-projects" class="text-white hover:underline">Work</a>
		<a href="/#contact-form" class="text-white hover:underline">Contact</a>
	</div>
</nav>

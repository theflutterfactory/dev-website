<script lang="ts">
	import { Footer, Header } from '$components';
	import '../app.css';
	let { children } = $props();
</script>

<div>
	<Header />
	<div class="mx-[16vw]">
		{@render children()}
	</div>
	<Footer />
</div>

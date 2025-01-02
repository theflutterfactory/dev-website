<script lang="ts">
	import { Footer, Header } from '$components';
	import '../app.css';
	let { children } = $props();
</script>

<div>
	<div class="mx-[16vw]">
		<Header />
		{@render children()}
	</div>
	<Footer />
</div>

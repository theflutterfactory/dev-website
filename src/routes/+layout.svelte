<script lang="ts">
	import { dev } from '$app/environment';
	import { Footer, Header } from '$components';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import '../app.css';
	let { children } = $props();
	injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<div>
	<Header />
	<div class="mx-[16vw]">
		{@render children()}
	</div>
	<Footer />
</div>

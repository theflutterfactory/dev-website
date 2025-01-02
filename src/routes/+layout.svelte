<script lang="ts">
	import { Header } from '$components';
	import '../app.css';
	let { children } = $props();
</script>

<div class="mx-[16vw]">
	<Header />
	{@render children()}
</div>

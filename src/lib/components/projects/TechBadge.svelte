<script lang="ts">
	type Props = {
		tech: string;
		index: number;
	};

	let { tech, index }: Props = $props();

	const colors = [
		'bg-blue-500/20 text-blue-300 border-blue-500/30',
		'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
		'bg-purple-500/20 text-purple-300 border-purple-500/30',
		'bg-green-500/20 text-green-300 border-green-500/30',
		'bg-pink-500/20 text-pink-300 border-pink-500/30'
	];

	const colorClass = colors[index % colors.length];
</script>

<span
	class={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105 ${colorClass}`}
>
	<svg class="h-2 w-2 fill-current" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
		<circle cx="4" cy="4" r="4" />
	</svg>
	{tech}
</span>

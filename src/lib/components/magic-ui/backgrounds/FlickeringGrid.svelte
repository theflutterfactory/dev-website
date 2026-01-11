<script lang="ts">
	import { onMount } from 'svelte';
	import { cn } from '$lib/utils';

	type Props = {
		class?: string;
		squareSize?: number;
		gridGap?: number;
		flickerChance?: number;
		color?: string;
		width?: number;
		height?: number;
	};

	let {
		class: className,
		squareSize = 4,
		gridGap = 6,
		flickerChance = 0.3,
		color = 'rgb(59, 130, 246)',
		width,
		height,
		...props
	}: Props = $props();

	let canvasRef: HTMLCanvasElement;
	let squares: { x: number; y: number; opacity: number }[] = $state([]);

	onMount(() => {
		const canvas = canvasRef;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const setupCanvas = () => {
			const dpr = window.devicePixelRatio || 1;
			const rect = canvas.getBoundingClientRect();
			canvas.width = (width || rect.width) * dpr;
			canvas.height = (height || rect.height) * dpr;
			ctx.scale(dpr, dpr);
			canvas.style.width = `${width || rect.width}px`;
			canvas.style.height = `${height || rect.height}px`;
		};

		setupCanvas();

		const cols = Math.floor(canvas.width / (window.devicePixelRatio || 1) / (squareSize + gridGap));
		const rows = Math.floor(
			canvas.height / (window.devicePixelRatio || 1) / (squareSize + gridGap)
		);

		const newSquares = [];
		for (let i = 0; i < cols; i++) {
			for (let j = 0; j < rows; j++) {
				newSquares.push({
					x: i * (squareSize + gridGap),
					y: j * (squareSize + gridGap),
					opacity: Math.random()
				});
			}
		}
		squares = newSquares;

		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			squares.forEach((square) => {
				if (Math.random() < flickerChance) {
					square.opacity = Math.random();
				}

				ctx.fillStyle = color.replace('rgb', 'rgba').replace(')', `, ${square.opacity})`);
				ctx.fillRect(square.x, square.y, squareSize, squareSize);
			});

			requestAnimationFrame(animate);
		};

		animate();

		window.addEventListener('resize', setupCanvas);

		return () => {
			window.removeEventListener('resize', setupCanvas);
		};
	});
</script>

<canvas bind:this={canvasRef} class={cn('pointer-events-none', className)} {...props}></canvas>

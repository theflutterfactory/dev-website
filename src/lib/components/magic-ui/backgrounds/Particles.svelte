<script lang="ts">
	import { onMount } from 'svelte';
	import { cn } from '$lib/utils';

	type Props = {
		class?: string;
		quantity?: number;
		staticity?: number;
		ease?: number;
		refresh?: boolean;
	};

	let {
		class: className,
		quantity = 30,
		staticity = 50,
		ease = 50,
		refresh = false,
		...props
	}: Props = $props();

	let canvasRef: HTMLCanvasElement;
	let canvasSize = $state({ w: 0, h: 0 });
	let context: CanvasRenderingContext2D | null = null;
	let circles: {
		x: number;
		y: number;
		translateX: number;
		translateY: number;
		size: number;
		alpha: number;
		targetAlpha: number;
		dx: number;
		dy: number;
		magnetism: number;
	}[] = [];
	let mouse = $state({ x: 0, y: 0 });

	onMount(() => {
		if (canvasRef) {
			context = canvasRef.getContext('2d');
		}
		initCanvas();
		animate();
		window.addEventListener('resize', initCanvas);

		return () => {
			window.removeEventListener('resize', initCanvas);
		};
	});

	function initCanvas() {
		canvasSize = { w: canvasRef.offsetWidth, h: canvasRef.offsetHeight };
		canvasRef.width = canvasSize.w;
		canvasRef.height = canvasSize.h;
	}

	function onMouseMove(e: MouseEvent) {
		mouse = {
			x: e.clientX,
			y: e.clientY
		};
	}

	$effect(() => {
		if (canvasSize.w > 0 && canvasSize.h > 0) {
			circleParams();
		}
	});

	function circleParams() {
		circles = [];
		for (let i = 0; i < quantity; i++) {
			const x = Math.floor(Math.random() * canvasSize.w);
			const y = Math.floor(Math.random() * canvasSize.h);
			const translateX = 0;
			const translateY = 0;
			const size = Math.floor(Math.random() * 2) + 1;
			const alpha = 0;
			const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
			const dx = (Math.random() - 0.5) * 0.2;
			const dy = (Math.random() - 0.5) * 0.2;
			const magnetism = 0.1 + Math.random() * 4;
			circles.push({
				x,
				y,
				translateX,
				translateY,
				size,
				alpha,
				targetAlpha,
				dx,
				dy,
				magnetism
			});
		}
	}

	function drawCircle(circle: (typeof circles)[0], update = false) {
		if (!context) return;

		const { x, y, translateX, translateY, size, alpha } = circle;
		context.translate(translateX, translateY);
		context.beginPath();
		context.arc(x, y, size, 0, 2 * Math.PI);
		context.fillStyle = `rgba(255, 255, 255, ${alpha})`;
		context.fill();
		context.setTransform(1, 0, 0, 1, 0, 0);

		if (!update) {
			circles.push(circle);
		}
	}

	function clearContext() {
		if (!context) return;
		context.clearRect(0, 0, canvasSize.w, canvasSize.h);
	}

	function drawParticles() {
		clearContext();
		circles.forEach((circle, i) => {
			// Handle fade in
			const edge = [
				circle.x + circle.translateX - circle.size,
				canvasSize.w - circle.x - circle.translateX - circle.size,
				circle.y + circle.translateY - circle.size,
				canvasSize.h - circle.y - circle.translateY - circle.size
			];
			const closestEdge = edge.reduce((a, b) => Math.min(a, b));
			const remapClosestEdge = parseFloat(
				(Math.min(Math.max(closestEdge, 0), 20) / 20).toFixed(2)
			);
			if (remapClosestEdge > 1) {
				circle.alpha += 0.02;
				if (circle.alpha > circle.targetAlpha) circle.alpha = circle.targetAlpha;
			} else {
				circle.alpha = circle.targetAlpha * remapClosestEdge;
			}
			circle.x += circle.dx;
			circle.y += circle.dy;
			circle.translateX += (mouse.x / (staticity / circle.magnetism) - circle.translateX) / ease;
			circle.translateY += (mouse.y / (staticity / circle.magnetism) - circle.translateY) / ease;
			// Handle boundary
			if (
				circle.x < -circle.size ||
				circle.x > canvasSize.w + circle.size ||
				circle.y < -circle.size ||
				circle.y > canvasSize.h + circle.size
			) {
				circles.splice(i, 1);
				const newCircle = {
					x: Math.floor(Math.random() * canvasSize.w),
					y: Math.floor(Math.random() * canvasSize.h),
					translateX: 0,
					translateY: 0,
					size: circle.size,
					alpha: 0,
					targetAlpha: circle.targetAlpha,
					dx: circle.dx,
					dy: circle.dy,
					magnetism: circle.magnetism
				};
				circles.push(newCircle);
			}
			drawCircle(circle, true);
		});
	}

	function animate() {
		drawParticles();
		requestAnimationFrame(animate);
	}
</script>

<svelte:window on:mousemove={onMouseMove} />

<canvas bind:this={canvasRef} class={cn('h-full w-full', className)} {...props}></canvas>

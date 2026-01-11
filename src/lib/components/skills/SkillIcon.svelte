<script lang="ts">
	import GlassCard from '$lib/components/shared/GlassCard.svelte';

	let {
		skill
	}: {
		skill: Skill;
	} = $props();
</script>

<div class="skill-icon-wrapper group/skill flex-shrink-0 px-4">
	<GlassCard
		class="relative flex h-24 w-24 items-center justify-center transition-all duration-300 group-hover/skill:border-blue-400/50 group-hover/skill:bg-blue-500/10"
	>
		<i
			class={`${skill.iconClass} text-4xl text-gray-300 transition-all duration-300 group-hover/skill:scale-0 group-hover/skill:opacity-0`}
		></i>

		<div
			class="absolute inset-0 flex items-center justify-center px-2 text-center text-sm font-semibold text-blue-400 opacity-0 transition-all duration-300 group-hover/skill:scale-100 group-hover/skill:opacity-100"
		>
			{skill.name}
		</div>
	</GlassCard>
</div>

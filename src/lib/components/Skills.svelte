<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';

	type SkillsProps = {
		skills: Skill[];
	};

	let { skills }: SkillsProps = $props();
</script>

<section class="mt-4">
	<SectionHeader sectionName="skills">Skills</SectionHeader>
	<div class="my-4 flex items-center justify-center">
		<div class="grid grid-cols-5 flex-wrap justify-center gap-x-8 gap-y-8">
			{#each skills as skill}
				<i class={`${skill.iconClass} text-6xl `}></i>
			{/each}
		</div>
	</div>
</section>

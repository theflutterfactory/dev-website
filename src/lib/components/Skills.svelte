<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';

	type SkillsProps = {
		skills: Skill[];
	};

	let { skills }: SkillsProps = $props();
</script>

<section class="mt-4">
	<SectionHeader sectionName="skills">Skills</SectionHeader>
	<div class="mx-auto my-10 grid grid-cols-5 place-items-center gap-x-2 gap-y-4 lg:w-1/2">
		{#each skills as skill}
			<div class="tooltip-container">
				<i class={`${skill.iconClass} flex text-4xl md:text-6xl`}></i>
				<div class="tooltip">{skill.name}</div>
			</div>
		{/each}
	</div>
</section>

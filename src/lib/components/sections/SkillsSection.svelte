<script lang="ts">
	import ScrollReveal from '$lib/components/animations/ScrollReveal.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import Marquee from '$lib/components/magic-ui/layout/Marquee.svelte';
	import SkillIcon from '$lib/components/skills/SkillIcon.svelte';

	type Props = {
		skills: Skill[];
	};

	let { skills }: Props = $props();

	const categorizeSkills = (skills: Skill[]) => {
		const frontend: Skill[] = [];
		const backend: Skill[] = [];
		const tools: Skill[] = [];

		skills.forEach((skill) => {
			const name = skill.name.toLowerCase();
			const iconClass = skill.iconClass.toLowerCase();

			if (
				iconClass.includes('react') ||
				iconClass.includes('angular') ||
				iconClass.includes('vue') ||
				iconClass.includes('svelte') ||
				iconClass.includes('html') ||
				iconClass.includes('css') ||
				iconClass.includes('sass') ||
				iconClass.includes('tailwind') ||
				iconClass.includes('bootstrap') ||
				iconClass.includes('javascript') ||
				iconClass.includes('typescript') ||
				name.includes('flutter') ||
				name.includes('swift')
			) {
				frontend.push(skill);
			} else if (
				iconClass.includes('node') ||
				iconClass.includes('express') ||
				iconClass.includes('django') ||
				iconClass.includes('flask') ||
				iconClass.includes('spring') ||
				iconClass.includes('laravel') ||
				iconClass.includes('rails') ||
				iconClass.includes('php') ||
				iconClass.includes('python') ||
				iconClass.includes('java') ||
				iconClass.includes('csharp') ||
				iconClass.includes('go') ||
				iconClass.includes('rust') ||
				iconClass.includes('mongodb') ||
				iconClass.includes('postgresql') ||
				iconClass.includes('mysql') ||
				iconClass.includes('redis') ||
				iconClass.includes('firebase') ||
				iconClass.includes('supabase')
			) {
				backend.push(skill);
			} else {
				tools.push(skill);
			}
		});

		return { frontend, backend, tools };
	};

	const { frontend, backend, tools } = categorizeSkills(skills);
</script>

<section class="py-24">
	<ScrollReveal>
		<SectionHeader sectionName="skills">Skills & Technologies</SectionHeader>

		<div class="mt-16 space-y-12">
			{#if frontend.length > 0}
				<div>
					<h3 class="mb-6 text-center text-xl font-semibold text-gray-300">Frontend</h3>
					<Marquee pauseOnHover={true} speed={30}>
						{#each frontend as skill}
							<SkillIcon {skill} />
						{/each}
					</Marquee>
				</div>
			{/if}

			{#if backend.length > 0}
				<div>
					<h3 class="mb-6 text-center text-xl font-semibold text-gray-300">Backend & Database</h3>
					<Marquee reverse={true} pauseOnHover={true} speed={35}>
						{#each backend as skill}
							<SkillIcon {skill} />
						{/each}
					</Marquee>
				</div>
			{/if}

			{#if tools.length > 0}
				<div>
					<h3 class="mb-6 text-center text-xl font-semibold text-gray-300">Tools & DevOps</h3>
					<Marquee pauseOnHover={true} speed={40}>
						{#each tools as skill}
							<SkillIcon {skill} />
						{/each}
					</Marquee>
				</div>
			{/if}

			{#if frontend.length === 0 && backend.length === 0 && tools.length === 0}
				<Marquee pauseOnHover={true} speed={30}>
					{#each skills as skill}
						<SkillIcon {skill} />
					{/each}
				</Marquee>
			{/if}
		</div>
	</ScrollReveal>
</section>

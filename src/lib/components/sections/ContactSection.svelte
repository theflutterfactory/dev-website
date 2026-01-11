<script lang="ts">
	import ScrollReveal from '$lib/components/animations/ScrollReveal.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import GlassCard from '$lib/components/shared/GlassCard.svelte';
	import Ripple from '$lib/components/magic-ui/effects/Ripple.svelte';
	import ShimmerButton from '$lib/components/magic-ui/buttons/ShimmerButton.svelte';

	let contactName = $state('');
	let email = $state('');
	let message = $state('');
	let isFormInvalid = $state(false);
	let isEmailSent = $state(false);
	let showErrorMsg = $state(false);
	let isLoading = $state(false);

	let { spinner } = $props();

	async function onSubmit(event: MouseEvent) {
		event.preventDefault();

		if (email && contactName && message) {
			isLoading = true;
			const response = await fetch('/api/send-mail', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					contactName,
					email,
					message
				})
			});
			isLoading = false;

			if (response.ok) {
				isEmailSent = true;
			} else {
				showErrorMsg = true;
			}
		} else {
			isFormInvalid = true;
		}
	}
</script>

<section id="contact-form" class="py-24">
	<ScrollReveal>
		<SectionHeader sectionName="contact-form">Get In Touch</SectionHeader>

		<div class="mx-auto mt-16 max-w-6xl">
			<div class="grid gap-12 md:grid-cols-2">
				<div class="relative flex flex-col justify-center">
					<div class="absolute inset-0 -z-10 opacity-30">
						<Ripple mainCircleSize={150} numCircles={6} />
					</div>

					<div>
						<h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">
							Tell me about your project
						</h2>
						<p class="mb-8 text-lg leading-relaxed text-gray-300">
							Whether it's building a small project from scratch or working on an existing codebase
							with a large team, I'm always excited to dig into some code. Feel free to reach out to
							me and let's create something special.
						</p>

						<div class="space-y-4">
							<a
								href="mailto:julian.currie@gmail.com"
								class="group flex items-center gap-3 text-gray-400 transition-colors hover:text-blue-400"
							>
								<div
									class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 transition-colors group-hover:bg-blue-500/20"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
										/>
										<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
									</svg>
								</div>
								<span>julian.currie@gmail.com</span>
							</a>
						</div>
					</div>
				</div>

				<div>
					{#if isEmailSent}
						<GlassCard class="p-8 text-center">
							<div class="mb-4 flex justify-center">
								<div
									class="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-8 w-8 text-green-400"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>
							</div>
							<h3 class="mb-2 text-2xl font-bold text-white">Thank You!</h3>
							<p class="text-gray-300">
								Thanks for reaching out to contact me. I should be able to reply within 48 hours.
							</p>
						</GlassCard>
					{:else if isLoading}
						<GlassCard class="flex flex-col items-center justify-center p-12 text-center">
							{@render spinner()}
							<h3 class="mt-4 text-xl font-semibold text-white">Submitting contact form...</h3>
						</GlassCard>
					{:else if showErrorMsg}
						<GlassCard class="p-8 text-center">
							<div class="mb-4 flex justify-center">
								<div class="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-8 w-8 text-red-400"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
											clip-rule="evenodd"
										/>
									</svg>
								</div>
							</div>
							<h3 class="mb-2 text-2xl font-bold text-white">Oops!</h3>
							<p class="text-gray-300">
								There seems to be a server issue at the moment. Please contact me directly at
								<a
									class="text-blue-400 underline hover:text-blue-300"
									href="mailto:julian.currie@gmail.com">julian.currie@gmail.com</a
								>
							</p>
						</GlassCard>
					{:else}
						<GlassCard class="p-8">
							<form class="space-y-6">
								<div>
									<label for="name" class="mb-2 block text-sm font-medium text-gray-300">Name</label
									>
									<input
										id="name"
										type="text"
										bind:value={contactName}
										placeholder="John Doe"
										class="w-full rounded-lg border bg-gray-900/50 px-4 py-3 text-white backdrop-blur-sm transition-all duration-300 placeholder:text-gray-500 focus:ring-2 focus:outline-none"
										class:border-red-500={isFormInvalid && !Boolean(contactName.length)}
										class:focus:border-blue-400={!(isFormInvalid && !Boolean(contactName.length))}
										class:focus:ring-blue-400={!(isFormInvalid && !Boolean(contactName.length))}
										class:border-white={!(isFormInvalid && !Boolean(contactName.length))}
									/>
									{#if isFormInvalid && !Boolean(contactName.length)}
										<p class="mt-1 text-sm text-red-400">Name is required</p>
									{/if}
								</div>

								<div>
									<label for="email" class="mb-2 block text-sm font-medium text-gray-300">
										Email
									</label>
									<input
										id="email"
										type="email"
										bind:value={email}
										placeholder="john@example.com"
										class="w-full rounded-lg border bg-gray-900/50 px-4 py-3 text-white backdrop-blur-sm transition-all duration-300 placeholder:text-gray-500 focus:ring-2 focus:outline-none"
										class:border-red-500={isFormInvalid && !Boolean(email.length)}
										class:focus:border-blue-400={!(isFormInvalid && !Boolean(email.length))}
										class:focus:ring-blue-400={!(isFormInvalid && !Boolean(email.length))}
										class:border-white={!(isFormInvalid && !Boolean(email.length))}
									/>
									{#if isFormInvalid && !Boolean(email.length)}
										<p class="mt-1 text-sm text-red-400">Email is required</p>
									{/if}
								</div>

								<div>
									<label for="message" class="mb-2 block text-sm font-medium text-gray-300">
										Message
									</label>
									<textarea
										id="message"
										rows="5"
										bind:value={message}
										placeholder="Tell me about your project..."
										class="w-full rounded-lg border bg-gray-900/50 px-4 py-3 text-white backdrop-blur-sm transition-all duration-300 placeholder:text-gray-500 focus:ring-2 focus:outline-none"
										class:border-red-500={isFormInvalid && !Boolean(message.length)}
										class:focus:border-blue-400={!(isFormInvalid && !Boolean(message.length))}
										class:focus:ring-blue-400={!(isFormInvalid && !Boolean(message.length))}
										class:border-white={!(isFormInvalid && !Boolean(message.length))}
									></textarea>
									{#if isFormInvalid && !Boolean(message.length)}
										<p class="mt-1 text-sm text-red-400">Message is required</p>
									{/if}
								</div>

								<div class="flex justify-end">
									<ShimmerButton
										onclick={onSubmit}
										class="w-full px-8 py-3 text-base font-semibold md:w-auto"
									>
										Send Message
									</ShimmerButton>
								</div>
							</form>
						</GlassCard>
					{/if}
				</div>
			</div>
		</div>
	</ScrollReveal>
</section>

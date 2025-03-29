<script lang="ts">
	import { Button, SectionHeader } from '$components';

	let contactName = $state('');
	let email = $state('');
	let message = $state('');
	let isFormInvalid = $state(false);
	let isEmailSent = $state(false);
	let showErrorMsg = $state(false);
	let isLoading = $state(false);

	let { spinner } = $props();

	$inspect(contactName, email, message);

	async function onSubmit(event: Event) {
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

<section class="mt-4">
	<SectionHeader sectionName="contact-form">Contact Me</SectionHeader>
	<div class="mt-8 flex flex-col justify-between md:flex-row">
		<div class="md:w-1/2">
			<h2 class="mb-4 text-white">Tell me about your project</h2>
			<p class="text-lg text-white/90">
				Whether it's building a small project from scratch or working on an existing codebase with a
				large team, I'm always excited to dig into some code. Feel free to reach out to me and let's
				create something special.
			</p>
		</div>
		{#if isEmailSent}
			<div class="md:w-2/5">
				<h2>Thanks for reaching out to contact me. I should be able to reply within 48 hours</h2>
			</div>
		{:else if isLoading}
			<div class="flex w-2/5">
				{@render spinner()}
				<h2>Submitting contact form...</h2>
			</div>
		{:else if showErrorMsg}
			<div class="w-2/5">
				<h2>
					There seems to a server issue at the moment. Please me directly at <a
						class="size-4 text-blue-700 underline"
						href="mailto:julian.currie@gmail.com">julian.currie@gmail.com</a
					>
				</h2>
			</div>
		{:else}
			<div class="md:w-2/5">
				<form>
					<input
						class:input-error={isFormInvalid && !Boolean(contactName.length)}
						placeholder="Name"
						bind:value={contactName}
					/>
					<input
						class:input-error={isFormInvalid && !Boolean(email.length)}
						placeholder="Email"
						bind:value={email}
					/>
					<textarea
						class:input-error={isFormInvalid && !Boolean(message.length)}
						placeholder="Message"
						bind:value={message}
					></textarea>
					<Button onclick={onSubmit}>Submit</Button>
				</form>
			</div>
		{/if}
	</div>
</section>

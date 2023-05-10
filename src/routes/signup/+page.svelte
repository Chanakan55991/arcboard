<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from '../$types';
	import toast, { Toaster } from 'svelte-french-toast';
	export let form: ActionData;

	$: if (form?.code) {
		toast.error(form.message);
	}
</script>

<Toaster />
<div class="flex flex-row h-screen items-center justify-center">
	<div class="flex flex-col items-start justify-center">
		<h1 class="font-semibold text-xl">New Account</h1>
		<span class="text-gray-400"
			>Already have an account? <a
				class="link text-black"
				href="/signin"
				title="Sign In to your existing account">Sign in</a
			>.</span
		>

		<form class="mt-4 flex-col w-screen max-w-md flex gap-y-1" method="post" use:enhance>
			<label class="font-semibold" for="email">Email Address</label>
			<input
				name="email"
				type="text"
				required
				placeholder="Email"
				class="input input-bordered mb-2"
			/>
			<label class="font-semibold" for="password">Password</label>
			<input
				name="password"
				type="password"
				placeholder="Password"
				required
				class="input input-bordered mb-2"
			/>
			<label class="font-semibold" for="password-confirm">Password Confirmation</label>
			<input
				name="password-confirm"
				type="password"
				placeholder="Retype Password"
				required
				class="input input-bordered mb-4"
			/>
			<input class="btn btn-primary" type="submit" value="Sign Up" />
		</form>
	</div>
</div>

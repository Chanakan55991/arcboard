<script lang="ts">
	import { enhance } from '$app/forms';
	import { Toaster, toast } from 'svelte-french-toast';
	export let form;

	$: if (form?.code) {
		toast.error(form.message);
	}
</script>

<Toaster />
<div class="flex flex-row h-screen items-center justify-center">
	<div class="flex flex-col items-start justify-center">
		<h1 class="font-semibold text-xl dark:text-[#eaeaea]">Existing Account</h1>
		<span class="text-gray-500 dark:text-gray-400"
			>Don't have an account yet? <a
				class="link text-black dark:text-[#eaeaea]"
				href="/signup"
				title="Sign Up a fresh account">Sign up</a
			>.</span
		>

		<form class="mt-4 flex-col w-screen max-w-md flex gap-y-1" method="post" use:enhance>
			<label class=" font-semibold dark:text-[#eaeaea]" for="email">Email Address</label>
			<input
				name="email"
				type="text"
				required
				placeholder="Email"
				class="input input-bordered mb-2 dark:text-[#eaeaea]"
			/>
			<label class=" font-semibold dark:text-[#eaeaea]" for="password">Password</label>
			<input
				name="password"
				type="password"
				placeholder="Password"
				required
				class="input input-bordered mb-2 dark:text-[#eaeaea]"
			/>
			<input class="btn btn-primary" type="submit" value="Sign In" />
		</form>
	</div>
</div>

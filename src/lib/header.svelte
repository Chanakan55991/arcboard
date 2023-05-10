<script lang="ts">
	export let user: { userId?: string; email?: string } = { userId: undefined, email: undefined };
</script>

<nav class="navbar z-20 justify-center fixed bg-opacity-0">
	<div
		class="flex flex-row max-w-7xl bg-base-100 p-2 rounded-2xl backdrop-blur-md px-4 w-screen justify-between items-center bg-opacity-40 shadow-lg"
	>
		<div class="title">
			<a href="/"
				><span class="tracking-tight text-2xl dark:text-[#eaeaea]"
					><span class="text-orange-600">arc</span>board</span
				></a
			>
		</div>
		<div>
			{#if !user || !user.email}
				<div class="flex flex-row gap-x-4">
					<a class="link link-hover text-lg dark:text-[#eaeaea]" href="/signin">Sign In</a>
					<a class="link link-hover text-lg dark:text-[#eaeaea]" href="/signup">Sign Up</a>
				</div>
			{:else}
				<div class="flex flex-row gap-x-2 items-center">
					<a class="link link-hover dark:text-[#eaeaea]" href="/dashboard">Dashboard</a>
					<form method="post" class="ml-4">
						<button formaction="/signout" class="btn-outline btn py-2">
							<div>
								<span class="dark:text-[#eaeaea]">{user.email.split('@')[0]}</span>
							</div>
						</button>
					</form>
				</div>
			{/if}
		</div>
	</div>
</nav>

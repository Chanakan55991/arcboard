<script lang="ts">
	export let user: { userId?: string; email?: string } = { userId: undefined, email: undefined };
</script>

<nav class="p-4 w-screen flex justify-center fixed">
	<div class="flex flex-row max-w-6xl w-screen justify-between items-center">
		<div class="title">
			<a href="/"
				><span class="tracking-tight text-2xl"><span class="text-lime-500">arc</span>board</span></a
			>
		</div>
		<div>
			{#if !user || !user.email}
				<a class="link link-hover" href="/signin">Sign in</a>
				<a class="link link-hover" href="/signup">Sign Up</a>
			{:else}
				<a data-sveltekit-preload-data="off" class="link" href="/signout">
					<div>
						<span
							>{user.email.split('@')[0].charAt(0).toUpperCase() +
								user.email.split('@')[0].slice(1)}</span
						>
					</div>
				</a>
			{/if}
		</div>
	</div>
</nav>

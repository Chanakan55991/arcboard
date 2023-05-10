<script>
	import { page } from '$app/stores';
</script>

<div class="flex flex-row items-center justify-center h-screen">
	<div class="flex flex-col items-center justify-center">
		<h1 class="text-3xl mb-2">{$page.status}</h1>
		<h2>{$page.error?.message}</h2>
		<h4 class="text-gray-400 mt-1">Have a nice day!</h4>
	</div>
</div>

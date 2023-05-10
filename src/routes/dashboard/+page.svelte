<script>
	import Item from '$lib/item.svelte';
</script>

<main class="h-screen w-screen">
	<div class="pt-24 px-16">
		<span class="text-3xl font-bold dark:text-[#eaeaea]">Quick Links</span>
		<ul class="flex flex-row gap-x-4 mt-4">
			<Item imgSrc="/me.png" name="linkthing" description="All your online persona in one place" />
			<Item
				imgSrc="https://github.com/Chanakan55991/VisuaThought/raw/main/screenshots/visuathought.png"
				name="VisuaThought"
				description="Another dead pet project"
			/>
			<Item imgSrc="/arcboard.png" name="Arcboard" description="A dashboard for your browser" />
		</ul>
	</div>
</main>

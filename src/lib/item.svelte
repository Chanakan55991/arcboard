<script lang="ts">
	export let imgSrc: string;
	export let name: string;
	export let description: string;
</script>

<li>
	<div class="card w-72 bg-base-100 shadow-xl bg-opacity-25 backdrop-blur-md">
		<figure>
			<img src={imgSrc} alt="sample" />
		</figure>
		<div class="card-body">
			<h2 class="card-title dark:text-[#eaeaea]">{name}</h2>
			<p class="dark:text-[#eaeaea]">{description}</p>
		</div>
	</div>
</li>

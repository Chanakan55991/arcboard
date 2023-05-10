<script lang="ts">
	import '../app.css';
	import Header from '../lib/header.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<Header user={data.user} />
<slot />

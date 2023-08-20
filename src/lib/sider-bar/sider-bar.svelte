<script>
	import { DAccordion } from '$lib/index.js';
	export let items = [];
</script>

<DAccordion {items} on:selectItem />
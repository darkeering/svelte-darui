<script>
	import { DDropdownList, DButton } from '$lib/index.js';
	export let items;
	let origin;
	let show = false;
</script>

<DButton
	on:click={(e) => {
		e.stopPropagation();
		origin = e.target;
		show = !show;
	}}
	>toggle
</DButton>
<DDropdownList bind:show {origin} {items} />

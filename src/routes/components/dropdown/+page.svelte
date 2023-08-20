<script>
	import { DDropdown, DButton } from '$lib/index.js';
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
<br />
<DDropdown bind:show {origin} />

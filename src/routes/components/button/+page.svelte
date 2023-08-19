<script>
	import { DButton, DemoExample } from '$lib/index.js';
	function onClick() {
		console.log('button onClick');
	}
</script>

<DemoExample>
	<DButton
		on:click={() => {
			console.log('button onClick');
		}}
	>
		Primary
	</DButton>
</DemoExample>

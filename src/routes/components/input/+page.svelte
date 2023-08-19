<script>
	import { DInput, DemoExample } from '$lib/index.js';
	let value = '';
</script>

<DemoExample>
	<DInput
		on:change={(e) => {
			console.log(e);
		}}
		on:input={(e) => {
			value = e.target.value;
		}}
		{value}
	/>
	<p>input value: {value}</p>
	<button on:click={() => (value += '1')}> value + 1</button>
</DemoExample>

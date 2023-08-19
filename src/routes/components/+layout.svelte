<script>
	import { goto } from '$app/navigation';
	import { DSiderBar } from '$lib/index.js';
	function selectItem(item) {
		console.log(item);
		goto('/components/' + item.title.toLowerCase());
	}
</script>

<div class="container">
	<div class="siderbar">
		<DSiderBar {selectItem} />
	</div>

	<div class="detail">
		<slot />
	</div>
</div>

<style>
	.container {
		display: flex;
	}
	.siderbar {
		/* display: inline-block; */
		width: 200px;
	}
	.detail {
		/* display: inline-block; */
		width: 500px;
	}
</style>

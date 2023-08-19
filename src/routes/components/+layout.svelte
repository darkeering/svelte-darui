<script>
	import { goto } from '$app/navigation';
	import { DSiderBar } from '$lib/index.js';
	const data = [
		{
			title: 'Basic',
			children: [
				{
					title: 'Button'
				}
			]
		},
		{
			title: 'Form',
			children: [
				{
					title: 'Checkbox'
				},
				{
					title: 'Input'
				}
			]
		},
		{
			title: 'Data',
			children: [
				{
					title: 'Tag'
				},
			]
		},

	];
	function selectItem(item) {
		goto('/components/' + item.title.toLowerCase());
	}
</script>

<div class="container">
	<div class="siderbar">
		<DSiderBar {data} {selectItem} />
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
		width: 200px;
		height: calc(100vh - 72px);
    padding-right: 20px;
    border-right: 1.5px solid #ccc;
    margin-right: 20px;
	}
	.detail {
		width: 500px;
	}
</style>

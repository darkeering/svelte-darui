<script>
	import { afterUpdate, onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { DSiderBar } from '$lib/index.js';
	/** @type {import('./$types').LayoutData} */
	export let data;
	onMount(() => {});
	afterUpdate(() => {
		items = initItemActive(items);
	});
	let items = [
		{
			title: 'Basic',
			children: [
				{
					title: 'Button'
				},
				{
					title: 'Status'
				},
				{
					title: 'Dropdown'
				},
				{
					title: 'Icon'
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
				{
					title: 'Transfer'
				}
			]
		},
		{
			title: 'Navigation',
			children: [
				{
					title: 'Tabs'
				}
			]
		}
	];
	function selectItem(e) {
		goto('/components/' + e.detail.title.toLowerCase());
	}
	function initItemActive(items) {
		items.forEach((item) => {
			if (item.title.toLowerCase() === data.id) {
				item.active = true;
			} else {
				item.active = false;
			}
			if (item.children?.length) item.children = initItemActive(item.children);
		});
		return items;
	}
</script>

<div class="container">
	<div class="siderbar">
		<DSiderBar {items} on:selectItem={selectItem} />
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

<script>
	import { goto } from '$app/navigation';
	import { DHeader } from '$lib/index.js';
	import { afterUpdate } from 'svelte';
	export let data;
	afterUpdate(() => {
		subtitleList = subtitleList.map(subtitle => {
			if(subtitle.title.toLowerCase() === data.id) {
				subtitle.active = true
			} else {
				subtitle.active = false
			}
			return subtitle
		})
	})
	let subtitleList = [
		{
			title: 'Home',
			navigate: '/home',
			active: true,
		},
		{
			title: 'Components',
			navigate: '/components/button',
		},
		{
			title: 'Light'
		},
		{
			title: 'Github',
			navigate: 'https://github.com/darkeering'
		}
	];
	function selectSubtitle(e) {
		goto(e.detail.navigate);
	}
</script>

<div class="container">
	<div class="header">
		<DHeader {subtitleList} on:selectSubtitle={selectSubtitle} />
	</div>
	<div>
		<slot />
	</div>
</div>

<style>
	.container {
		padding: 0 20px;
	}
	.header {
		margin: 20px 0;
	}
</style>

<script>
	import { onMount } from 'svelte';

	export let tabs = [];
	let activeLeft = 6;
	let activeTitle = '';
	onMount(() => {
		tabs.forEach((tab) => {
			if (tab.active) {
				activeTitle = tab.title;
			}
		});
	});
	function tabClick(tab, e) {
		activeLeft = e.target.offsetLeft;
		activeTitle = tab.title;
		tabs = tabs.map((item) => {
			item.active = false;
			if (item.title === tab.title) {
				item.active = true;
			}
			return item;
		});
	}
</script>

{#if tabs.length}
	<div>
		<ul>
			{#each tabs as tab (tab.title)}
				<li on:click={(e) => tabClick(tab, e)}>
					<span>{tab.title}</span>
				</li>
			{/each}
			<li class="active" style="left: {activeLeft - 4}px">
				{activeTitle}
			</li>
		</ul>
	</div>
{/if}

<style>
	* {
		padding: 0;
		margin: 0;
	}
	ul {
		list-style: none;
		display: inline-flex;
		background-color: #eee;
		border-radius: 4px;
		padding: 2px;
		position: relative;
	}
	ul li {
		padding: 4px;
		border-radius: 4px;
		background-color: transparent;
		line-height: 20px;
		cursor: pointer;
		z-index: 1;
	}
	ul li.active {
		position: absolute;
		height: 20px;
		background-color: #fff;
		color: #fff;
		z-index: 0;
		transition: all 0.25s;
	}
</style>

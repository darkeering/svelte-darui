<script>
	import { portal } from './action.js';
	export let show = false;
	export let origin;
	export let items;
	function dropdown(node, { delay = 0, duration = 250 }) {
		return { delay, duration, css: (t) => `opacity: ${t};height: ${node.clientHeight * t}px` };
	}
	// $: position = {
	// 	left: origin.getBoundingClientRect().left,
	// 	left: origin.getBoundingClientRect().top,
	// }
</script>

<svelte:document
	on:click={() => {
		show = false;
	}}
/>

{#if show}
	<ul
		use:portal
		transition:dropdown
		style="top: {origin.getBoundingClientRect().top + origin.getBoundingClientRect().height}px; left: {origin.getBoundingClientRect().left}px"
	>
		{#each items as item (item.title)}
			<li>{item.title}</li>
		{/each}
	</ul>
{/if}

<style>
	* {
		margin: 0;
		padding: 0;
	}
	ul {
		list-style: none;
		display: inline-flex;
		flex-direction: column;
		border-radius: 4px;
		padding: 8px;
		box-shadow: 0 0 8px #ccc;
		overflow: hidden;
		margin-top: 4px;
		position: absolute;
		z-index: 1;
		background-color: #fff;
	}
	ul li {
		cursor: pointer;
		padding: 4px;
		border-radius: 4px;
		transition: all 0.25s;
	}
	ul li:hover {
		background-color: #e0e7ff;
	}
</style>

<script>
	import AccordionMenu from './accordion-menu.svelte';
	import AccordionItem from './accordion-item.svelte';
	import AccordionList from './accordion-list.svelte';
	export let items = [];
	function dropdown(node, { delay = 0, duration = 250 }) {
		return { delay, duration, css: (t) => `opacity: ${t};height: ${node.clientHeight * t}px` };
	}
</script>

<ul>
	{#each items as item (item.title)}
		<li>
			{#if !item.children || !item.children.length}
				<AccordionItem {item} />
			{:else}
				<AccordionMenu
					{item}
					toggle={(i) => {
						i.toggle = !i.toggle;
						item = i;
					}}
				/>
				{#if !item.toggle}
					<div transition:dropdown>
						<AccordionList items={item.children} />
					</div>
				{/if}
			{/if}
		</li>
	{/each}
</ul>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	ul {
		list-style: none;
	}
	ul > li {
		cursor: pointer;
	}
  div {
    overflow: hidden;
  }
</style>

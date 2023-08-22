<script>
	import { afterUpdate, createEventDispatcher, onMount } from 'svelte';
	import { accordionData, activeItem } from './store.js';
	import AccordionList from './accordion-list.svelte';
	const dispatch = createEventDispatcher()
	export let items = [];

	activeItem.subscribe((item) => {
		if (item) {
			accordionData.set(setActiveItem($accordionData, item));
			dispatch('selectItem', item)
		}
	});

	onMount(() => {
	});
	
	afterUpdate(() => {
		accordionData.set(initData(items, 0));

	})

	function initData(items, level) {
		items.forEach((item) => {
			item['level'] = level;
			item['active'] = !!item['active'];
			if (item.children) {
				item['toggle'] = !!item['toggle'];
				item.children = initData(item.children, level + 1);
			}
		});
		return items;
	}

	function setActiveItem(items, item) {
		items.forEach((i) => {
			if (i.title === item.title) {
				i.active = true;
			} else {
				i.active = false;
			}
			if (i.children) {
				i.children = setActiveItem(i.children, item);
			}
		});
    return items
	}
</script>

<AccordionList items={$accordionData} />

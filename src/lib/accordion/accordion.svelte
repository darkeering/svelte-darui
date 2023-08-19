<script>
	import { onMount } from 'svelte';
	import { accordionData, activeItem } from './store.js';
	import AccordionList from './accordion-list.svelte';
	export let data = [];
	export let selectItem;

	activeItem.subscribe((item) => {
		if (item) {
			accordionData.set(setActiveItem($accordionData, item));
			selectItem(item)
		}
	});

	onMount(() => {
		accordionData.set(initData(data, 0));
	});

	function initData(data, level) {
		data.forEach((item) => {
			item['level'] = level;
			item['active'] = !!item['active'];
			if (item.children) {
				item['toggle'] = !!item['toggle'];
				item.children = initData(item.children, level + 1);
			}
		});
		return data;
	}

	function setActiveItem(data, item) {
		data.forEach((i) => {
			if (i.title === item.title) {
				i.active = true;
			} else {
				i.active = false;
			}
			if (i.children) {
				i.children = setActiveItem(i.children, item);
			}
		});
    return data
	}
</script>

<AccordionList data={$accordionData} />

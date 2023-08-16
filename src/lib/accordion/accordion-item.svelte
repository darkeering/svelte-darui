<script>
	import { activeItem } from './store.js';

	export let item;
	const clickItem = () => {
		activeItem.set(item);
	};
</script>

<span class:active="{item.active}" style="padding-left: {item.level * 20}px;" on:click={clickItem}>{item.title}</span>

<style>
	span {
		display: block;
    margin-bottom: 5px;
    border-radius: 4px;
    padding: 4px 8px;
    transition: all 0.25s;
	}
  span:hover {
    background-color: #ccc;
  }
  span.active {
    background-color: #c7d2fe;
  }
</style>

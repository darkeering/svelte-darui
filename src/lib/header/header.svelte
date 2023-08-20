<script>
	import { createEventDispatcher } from 'svelte';

	export let subtitleList = [];

	const dispatch = createEventDispatcher();
	const onClick = (subtitle) => {
		subtitleList = subtitleList.map((sub) => {
			sub.active = false;
			if (sub.title === subtitle.title) {
				sub.active = true;
			}
			return sub;
		});
		dispatch('selectSubtitle', subtitle);
	};
</script>

<h1 class="d-header">
	<h2 class="d-header-title">
		<img src="/src/assets/favicon.png" alt="" />
		<span>svelte-darui</span>
	</h2>
	<ul class="d-header-subtitle">
		{#each subtitleList as subtitle (subtitle.title)}
			<li on:click={() => onClick(subtitle)} class:active={subtitle.active}>
				{subtitle.title}
			</li>
		{/each}
	</ul>
</h1>

<style>
	* {
		padding: 0;
		margin: 0;
		font-size: 14px;
		font-weight: normal;
	}
	ul {
		list-style: none;
	}
	.d-header {
		display: flex;
		justify-content: space-between;
	}
	.d-header .d-header-title {
		display: flex;
		cursor: pointer;
		align-items: center;
	}
	.d-header .d-header-title span {
		font-size: 18px;
		font-weight: 700;
	}
	.d-header .d-header-subtitle {
		display: flex;
	}
	.d-header .d-header-subtitle > li {
		margin-left: 6px;
		display: flex;
		align-items: center;
		cursor: pointer;
		padding: 0 4px;
		border-radius: 4px;
	}
	.d-header .d-header-subtitle > li.active {
		background-color: #c7d2fe;
	}
	img {
		width: 24px;
		height: 24px;
		margin-right: 4px;
	}
</style>

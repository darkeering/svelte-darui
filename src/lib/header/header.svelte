<script>
	import { goto } from '$app/navigation';

	export let subtitleList = [

	];
	const onClick = (subtitle) => {
		if(subtitle.navigate) goto(subtitle.navigate)
	};
</script>

<h1 class="d-header">
	<h2 class="d-header-title">svelte-darui</h2>
	<ul class="d-header-subtitle">
		{#each subtitleList as subtitle (subtitle.title)}
			<li on:click={() => onClick(subtitle)}>
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
	}
	.d-header .d-header-subtitle {
		display: flex;
	}
	.d-header .d-header-subtitle > li {
		margin-left: 4px;
		cursor: pointer;
	}
</style>

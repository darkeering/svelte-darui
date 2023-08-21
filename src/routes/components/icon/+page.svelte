<script>
	import { DemoExample } from '$lib/index.js';
	let fonts = ['right', 'github-fill', 'up', 'fullscreen', 'check', 'rollback'];
	const str = '<i class="dar-icon icon-xxx" />';
</script>

<DemoExample>
	<i class="dar-icon icon-delete" />
</DemoExample>

<div class="container">
	{#each fonts as font (font)}
		<div class="font">
			<i class="dar-icon icon-{font}" />
			<span>{font}</span>
		</div>
	{/each}
</div>

<style>
	.container {
		display: flex;
    margin-top: 50px;
	}
	.font {
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100px;
	}
	span {
		margin-top: 6px;
	}
</style>

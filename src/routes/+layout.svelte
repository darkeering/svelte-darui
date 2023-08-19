<script>
	import { DHeader } from '$lib/index.js';
	const subtitleList = [
		{
			title: 'Home',
			navigate: '/home'
		},
		// {
		// 	title: 'Guide',
		// 	navigate: '/guide'
		// },
		{
			title: 'Components',
			navigate: '/components',
			active: true
		},
		{
			title: 'Light'
		},
		{
			title: 'Github',
			navigate: 'https://github.com/darkeering'
		}
	];
</script>

<div class="container">
	<div class="header">
		<DHeader {subtitleList} />
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

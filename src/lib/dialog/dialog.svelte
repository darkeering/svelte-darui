<script>
	import { portal } from './action.js';

	export let content = '';
	export let show = false;
	export let title = 'title';

	export let close = () => {
		show = false;
	};
</script>

{#if show}
	<div use:portal>
		<div class="mask" />
		<div class="container">
			<h5>{title}</h5>
			<i class="dar-icon icon-close" on:click={close} />
			<div class="content">
				{#if $$slots}
					<slot />
				{/if}
				{#if content}
					{content}
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	.mask {
		position: absolute;
		top: 0;
		width: 100vw;
		height: 100vh;
		background-color: #000;
		opacity: 0.25;
	}
	.container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 500px;
		height: 200px;
		background-color: #fff;
		border-radius: 8px;
		padding: 10px 20px;
	}
	h5 {
		display: flex;
		align-items: center;
		font-size: 25px;
		line-height: 50px;
		border-bottom: 1.5px solid #ccc;
	}
	.content {
		padding: 10px 0;
	}
	.icon-close {
		position: absolute;
		right: 20px;
		top: 20px;
		font-size: 24px;
		cursor: pointer;
	}
</style>

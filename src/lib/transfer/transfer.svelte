<script>
	import { crossfade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { flip } from 'svelte/animate';

	const [send, receive] = crossfade({
		duration: 600,
		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});
	export let todos = [];
</script>

<div class="container">
	<div class="left">
		<div class="field">
			<span>Source</span>
		</div>
		<div class="content">
			{#each todos.filter((i) => !i.done) as item (item.title)}
				<div
					class="label"
					in:receive={{ key: item.title }}
					out:send={{ key: item.title }}
					animate:flip
				>
					<input type="checkbox" bind:checked={item.done} />
					<span>{item.title}</span>
				</div>
			{/each}
		</div>
	</div>
	<div class="right">
		<div class="field">
			<span>Target</span>
		</div>
		<div class="content">
			{#each todos.filter((i) => i.done) as item (item.title)}
				<div
					class="label"
					in:receive={{ key: item.title }}
					out:send={{ key: item.title }}
					animate:flip
				>
					<input type="checkbox" bind:checked={item.done} />
					<span>{item.title}</span>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.container {
		display: inline-flex;
	}
	.left,
	.right {
		display: inline-flex;
		flex-direction: column;
		border: 1px solid #ccc;
		border-radius: 4px;
		min-width: 200px;
		margin-right: 20px;
	}
	.label {
		border-radius: 4px;
		margin-bottom: 4px;
		padding: 6px 0;
	}
	.field {
		padding: 8px;
		background-color: #eee;
	}
	.content {
		display: flex;
		flex-direction: column;
		max-height: 200px;
		overflow-y: overlay;
		overflow-x: hidden;
		padding: 8px;
		box-sizing: border-box;
		height: 100%;
	}
</style>

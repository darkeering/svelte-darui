<script>
	import { crossfade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { flip } from 'svelte/animate';
	import { afterUpdate } from 'svelte';

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
	export let todos = [
		{
			title: 'label1',
			done: false
		},
		{
			title: 'label2',
			done: false
		},
		{
			title: 'labe3',
			done: false
		},
		{
			title: 'label4',
			done: false
		},
		{
			title: 'label5',
			done: false
		},
		{
			title: 'label6',
			done: false
		},
		{
			title: 'label7',
			done: false
		},
		{
			title: 'label8',
			done: true
		}
	];
	let todoList = [];
	let doneList = [];
	afterUpdate(() => {
		todoList = todos.filter((i) => !i.done);
		doneList = todos.filter((i) => i.done);
	});
</script>

<div class="container">
	<div class="todo">
		<div class="field">
			<span>Source</span>
		</div>
		<div class="content">
			{#each todoList as todo (todo.title)}
				<div
					class="label"
					in:receive={{ key: todo.title }}
					out:send={{ key: todo.title }}
					animate:flip
				>
					<input type="checkbox" on:change={() => (todo.done = true)} />
					<span>{todo.title}</span>
				</div>
			{/each}
		</div>
	</div>
	<div class="todo">
		<div class="field">
			<span>Target</span>
		</div>
		<div class="content">
			{#each doneList as done (done.title)}
				<div
					class="label"
					in:receive={{ key: done.title }}
					out:send={{ key: done.title }}
					animate:flip
				>
					<input type="checkbox" checked on:change={() => (done.done = false)} />
					<span>{done.title}</span>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.container {
		display: inline-flex;
	}
	.todo {
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

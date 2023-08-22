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
				css: t => `
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
			title: 'label3',
			done: true
		}
	];
	function mark(todo, done) {
		todo.done = done;
		todos = todos.filter((t) => t.title !== todo.title);
		todos = [...todos, todo];
	}
</script>

<div class="container">
	<div class="todo">
		<h2>todo</h2>
		{#each todos.filter((todo) => !todo.done) as todo (todo.title)}
			<div
				class="label"
				in:receive={{ key: todo.title }}
				out:send={{ key: todo.title }}
				animate:flip
			>
				<input
					type="checkbox"
					on:change={(e) => {
						e.stopPropagation();
						e.stopImmediatePropagation();
						mark(todo, true);
					}}
				/>
				<span>{todo.title}</span>
				<i class="dar-icon icon-delete" />
			</div>
		{/each}
	</div>
	<div class="todo">
		<h2>done</h2>
		{#each todos.filter((todo) => todo.done) as todo (todo.title)}
			<div
				class="label"
				in:receive={{ key: todo.title }}
				out:send={{ key: todo.title }}
				animate:flip
			>
				<input type="checkbox" checked on:change={() => mark(todo, false)} />
				<span>{todo.title}</span>
				<i
					class="dar-icon icon-delete"
					on:click={() => {
						todos = todos.filter((t) => t.title !== todo.title);
					}}
				/>
				</div>
		{/each}
	</div>
</div>

<style>
	.container {
		display: inline-flex;
	}
	.todo {
		display: inline-flex;
		flex-direction: column;
		margin-right: 20px;
		/* border: 1px solid #ccc; */
		border-radius: 4px;
		padding: 20px 10px;
	}
	.label {
		background-color: #eee;
		border: 1px solid #ccc;
		border-radius: 4px;
		margin-bottom: 4px;
		padding: 4px 6px;
		position: relative;
	}
	h2 {
		padding: 0;
		margin: 0;
	}

	i {
		border: 1px solid #333;
		border-radius: 100%;
		padding: 2px;
		cursor: pointer;
	}

</style>

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
	export let sourceList = [];
	export let targetList = [];

  function sourceToTarget() {
    const sourceChecked = sourceList.filter(item => item.checked)
    sourceList = sourceList.filter(item => !item.checked)
    sourceChecked.forEach(item => item.checked = false)
    targetList = [...sourceChecked, ...targetList]
  }
  function targetToSource() {
    const targetChecked = targetList.filter(item => item.checked)
    targetList = targetList.filter(item => !item.checked)
    targetChecked.forEach(item => item.checked = false)
    sourceList = [...targetChecked, ...sourceList]
  }
</script>

<div class="container">
	<div class="left">
		<div class="field">
			<span>Source</span>
		</div>
		<div class="content">
			{#each sourceList as item (item.title)}
				<label
					class="label"
					in:receive={{ key: item.title }}
					out:send={{ key: item.title }}
					animate:flip
				>
					<input type="checkbox" bind:checked={item.checked} />
					<span>{item.title}</span>
				</label>
			{/each}
		</div>
	</div>
	<div class="transfer">
		<i class="dar-icon icon-right" on:click={() => sourceToTarget()} />
		<i class="dar-icon icon-left" on:click={() => targetToSource()} />
	</div>
	<div class="right">
		<div class="field">
			<span>Target</span>
		</div>
		<div class="content">
			{#each targetList as item (item.title)}
				<label
					class="label"
					in:receive={{ key: item.title }}
					out:send={{ key: item.title }}
					animate:flip
				>
					<input type="checkbox" bind:checked={item.checked} />
					<span>{item.title}</span>
				</label>
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
	}
	.transfer {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.transfer i {
		border-radius: 100%;
		padding: 6px;
    color: #fff;
		background-color: rgb(37, 99, 235, 0.8);
    margin: 5px 8px;
    cursor: pointer;
	}
	.transfer i:hover {
		background-color: rgb(37, 99, 235);
	}
	.label {
		border-radius: 4px;
		margin-bottom: 4px;
		padding: 6px 0;
    display: flex;
	}
  .label input {
    margin-right: 6px;
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

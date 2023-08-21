<script>
	export let item;

	export let toggle;
</script>

<p style="padding-left: {item.level * 20 + 8}px;" on:click={() => toggle(item)}>
	<span>{item.title}</span>
	<i class:toggled={item.toggle}>
		<i class="dar-icon icon-right" />
	</i>
</p>

<style>
	p {
		margin: 0;
		display: flex;
		justify-content: space-between;
		margin-bottom: 5px;
		border-radius: 4px;
		padding: 4px 8px;
		transition: all 0.25s;
		font-weight: 700;
	}
	p:hover {
		background-color: #ccc;
	}
	i {
		transition: all 0.25s;
		transform: rotate(90deg);
	}
	i.toggled {
		transform: rotate(0);
	}
</style>

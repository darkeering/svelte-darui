<script>
	export let type = 'info';
</script>

<span class="status {type}">
	<slot />
</span>

<style>
	.status {
		position: relative;
		padding-left: 16px;
		font-size: 14px;
		display: inline-flex;
		align-items: center;
	}
	.status::before {
		content: ' ';
		position: absolute;
		display: inline-block;
		width: 10px;
		height: 10px;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		border-radius: 100%;
		background-color: rgb(94, 124, 224);
	}
	.info::before {
		background-color: rgb(94, 124, 224);
	}
	.success::before {
		background-color: #86efac;
	}
	.warning::before {
		background-color: #fde047;
	}
	.error::before {
		background-color: #dc2626;
	}
</style>

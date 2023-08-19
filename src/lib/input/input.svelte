<script>
	export let value;
	export let placeholder = 'Please input value';
</script>

<input type="text" on:change on:input bind:value {placeholder} />

<style>
	input {
		border: 1px solid rgb(94, 124, 224);
		border-radius: 4px;
		line-height: 20px;
		padding: 4px 6px;
		font-size: 14px;
		outline: unset;
    transition: all 0.25s;
	}
	input:focus {
		border-color: rgb(99, 102, 241);
    box-shadow: 0px 0px 2px rgb(99, 102, 241, .6);
	}
</style>

<script>
	export let label = 'checkbox';
  export let checked = false
</script>

<div>
	<input type="checkbox" name="checkbox" bind:checked />
	<label for="checkbox">{label}</label>
</div>

<style>
  * {
    padding: 0;
    margin: 0;
  }
  div {
    display: flex;
    align-items: center;
  }
  input {
    margin-right: 4px;
  }
  label {
    display: flex;
    align-items: center;
    line-height: 24px;
  }
</style>

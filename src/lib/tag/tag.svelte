<script>
  export let type = 'info'
  export let label = type;
</script>

<span class={type}>
  {label}
</span>

<style>
  span {
    padding: 1px 4px;
    font-size: 14px;
    border-radius: 3px;
  }
  .info {
    background-color: #c7d2fe;
  }
  .warning {
    background-color: #fef08a;
  }
  .error {
    background-color: #fecaca;
  }
</style>
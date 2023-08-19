<button on:click class="btn">
  <slot />
</button>

<style>
  .btn {
    margin: 0;
    padding: 4px 8px;
    background-color: rgb(94, 124, 224);
    color: #fff;
    border-color: unset;
    border-style: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.25s;
  }
  .btn:hover {
    background-color: rgb(99, 102, 241);
  }
  .btn:active {
    transform: scale(.85);
  }
</style>
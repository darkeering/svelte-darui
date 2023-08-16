<script>
  import {SiderBar} from '$lib/index.js'

</script>

<div class="siderbar">
	<SiderBar />
</div>

<div class="detail">
  <slot />
</div>

<style>
	.siderbar {
		display: inline-block;
		width: 200px;
	}
  .detail {
    display: inline-block;
  }
</style>

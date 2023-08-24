<script>
	import { DButton, DialogService, DDialog, DemoExample } from '$lib/index.js';
	function openDialog() {
		const instance = new DialogService({
			title: 'this is title',
			content: 'this is content'
		});
    console.log(instance);
	}
	let show = false;
</script>

<DemoExample>
	<DButton 
    on:click={() => {
      const instance = new DialogService({
        title: 'this is title',
        content: 'this is content'
      });
      console.log(instance);
    }}
  >
    open dialog through service
  </DButton>
</DemoExample>

<br>

<DemoExample>
	<DButton 
    on:click={() => (show = true)}
  >
    open dialog through component
  </DButton>

	<DDialog 
    bind:show
  >
    open dialog through component
  </DDialog>
</DemoExample>

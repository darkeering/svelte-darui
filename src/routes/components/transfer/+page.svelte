<script>
	import { DTransfer, DemoExample } from '$lib/index.js';
	let sourceList = [
    {
      title: 'option1'
    },
    {
      title: 'option2'
    },
    {
      title: 'option3'
    },
    {
      title: 'option4'
    },
    {
      title: 'option5'
    },
  ];
	let targetList = [
    {
      title: 'option6'
    },
    {
      title: 'option7'
    },
    {
      title: 'option8'
    },
    {
      title: 'option9'
    },
    {
      title: 'option10'
    },
  ];
</script>

<DemoExample>
  <DTransfer {sourceList} {targetList} />
</DemoExample>

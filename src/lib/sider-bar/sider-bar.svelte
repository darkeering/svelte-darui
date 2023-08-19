<script>
	import { DAccordion } from '$lib/index.js';
	export let selectItem;
	const data = [
		{
			title: 'Basic',
			children: [
				{
					title: 'Button'
				}
			]
		},
		{
			title: 'Form',
			children: [
				{
					title: 'Checkbox'
				},
				{
					title: 'Input'
				}
			]
		}
	];
</script>

<DAccordion {data} {selectItem} />
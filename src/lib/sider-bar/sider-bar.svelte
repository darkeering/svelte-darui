<script>
	import { Accordion } from '$lib/index.js';
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

<Accordion {data} />
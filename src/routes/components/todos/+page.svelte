<script>
	import { DTodos } from '$lib/index.js';
	let todos = [
		{
			title: 'label1',
			done: false
		},
		{
			title: 'label2',
			done: false
		},
		{
			title: 'labe3',
			done: false
		},
		{
			title: 'label4',
			done: false
		},
		{
			title: 'label5',
			done: false
		},
		{
			title: 'label6',
			done: false
		},
		{
			title: 'label7',
			done: false
		},
		{
			title: 'label8',
			done: true
		}
	];
</script>

<DTodos {todos} />

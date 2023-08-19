<script>
  import {DHeader} from '$lib/index.js'
  const subtitleList = [
    {
			title: 'Home',
			navigate: '/home'
		},
		{
			title: 'Guide',
			navigate: '/guide'
		},
		{
			title: 'Components',
			navigate: '/components'
		},
		{
			title: 'Light',
		},
		{
			title: 'Github',
			navigate: 'github.com/darkeering'
		}
  ]
</script>

<DHeader {subtitleList} />
<slot />
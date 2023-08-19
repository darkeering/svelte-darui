<script>
	export let code;
	let show = false;
	let coding;
	let copied = false;
	function fade(node, { delay = 0, duration = 250 }) {
		return { delay, duration, css: (t) => `opacity: ${t};height: ${node.clientHeight * t}px` };
	}
	function scaleOut(node, { delay, duration=250 }) {
		return { delay, duration, css: (t) => `transform: scale(${t});` };
	}
	function scaleIn(node, { delay, duration = 250 }) {
		return { delay,duration, css: (t) => `transform: scale(${t});` };
	}
	function copy() {
		const textareaC = document.createElement('textarea');
		textareaC.setAttribute('readonly', 'readonly'); //设置只读属性防止手机上弹出软键盘
		textareaC.value = code; //上面selectText函数返回值赋给textarea的value
		document.body.appendChild(textareaC); //将textarea添加为body子元素
		textareaC.select();
		document.execCommand('copy');
		document.body.removeChild(textareaC); //移除DOM元素
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 5000);
	}
</script>

<div class="container">
	<div class="demo">
		<div>
			<slot />
		</div>
		<span class="show" on:click={() => (show = !show)}> code </span>
	</div>
	{#if show}
		<div class="code" transition:fade>
			<pre>
				<code bind:this={coding}>
					{code}
				</code>
			</pre>
			<span class="copy" on:click={copy}>
				{#if copied}
					<div in:scaleIn>copied</div>
				{:else}
					<div out:scaleOut>copy</div>
				{/if}
			</span>
		</div>
	{/if}
</div>

<style>
	.container {
		border: 1px solid #ccc;
		border-radius: 8px;
		width: 100%;
		overflow: hidden;
	}
	.demo {
		padding: 20px;
		position: relative;
	}
	.show {
		position: absolute;
		bottom: 2px;
		right: 2px;
		cursor: pointer;
	}
	pre {
		margin: 0;
		padding: 0;
		display: flex;
	}
	code {
		background-color: #111;
		/* padding: 20px; */
		box-sizing: border-box;
		color: #fff;
		font-size: 14px;
		font-weight: 500;
		width: 100%;
		display: block;
		border-bottom-right-radius: 8px;
		border-bottom-left-radius: 8px;
	}
	.copy {
		position: absolute;
		color: #fff;
		top: 2px;
		right: 2px;
		cursor: pointer;
	}
	.copy div {
		position: absolute;
		right: 0;
	}
	.code {
		position: relative;
	}
</style>

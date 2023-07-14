<script>
	import "carbon-components-svelte/css/white.css";
	import { Button, truncate, breakpoints } from "carbon-components-svelte";
</script>
<style>
	.center {
		margin: auto;
		width: 90%;
	}
</style>
<nav class="center">
	<a href="/">home</a>
	<a href="/about">about</a>
    <a href="/blog">blog</a>
	<a href="/browser">browser</a>
	<Button>Primary button</Button>
</nav>

<slot />

<script>
	import UserCtrl from '$lib/components/UserCtrlWidget.svelte'
</script>
<nav class="center">
	<UserCtrl />
	<a href="/">home</a>
	<a href="/about">about</a>
    <a href="/blog">blog</a>
	<a href="/browser">browser</a>
	<!--<a href="/viewer" target="_blank">viewer</a>-->
</nav>

<style>
	nav {
	  padding: 1rem;
	  background: lightskyblue;
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: space-evenly;
	}
		
	a {
		font-size: large;
	  text-decoration:underline;
	  color: inherit;
	}
</style>
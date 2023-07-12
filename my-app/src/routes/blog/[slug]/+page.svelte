<script>
	export let data;
    function foo() {
        data.post.views+=1;
    }
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
<button on:click={foo}>counter is {data.post.views} </button>
<a href="/about">about</a>

<script>
	export let data;
    let data2={views:0};
    function foo() {
        data.post.views+=1;
    }
    function foo2() {
        data2.views+=1;
    }
</script>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
<button on:click={foo}>counter is {data.post.views} </button>
<button on:click={foo2}>counter2 is {data2.views} </button>
<a href="/about">about</a>

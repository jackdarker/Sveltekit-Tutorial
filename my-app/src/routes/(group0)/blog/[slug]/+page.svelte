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

<h3>{data.post.title}</h3>
<div>{@html data.post.content}</div>
<p></p>
<button on:click={foo}>counter is {data.post.views} </button>
<button on:click={foo2}>counter2 is {data2.views} </button>
<a href="/about">about</a>

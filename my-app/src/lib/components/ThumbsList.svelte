<script>
    import { PaginationNav } from "carbon-components-svelte";
    import ImageView from '$lib/components/ImageView.svelte';
    //import fetchData from '$lib/data.js';
    export let design="right"; //left, right,side or top,bottom
    export let onclick=null;
    export let onpage=_onpage;
    export let data; //data from parent
    let rows = [];
    let path = '';
    let current_page = 1;
    let from = 1;
    let to = 1;
    let per_page = 1;
    let last_page = 1;
    let total = 0;
    let loading = true;
    
    function _onpage(page){
        console.log("newpage"+page);
    }
    function changePage(data) {
    loading = true;

    /*fetchData(path, params)
    .then(function (response) {
        path = response.path;
        current_page = response.current_page;
        from = response.from;
        to = response.to;
        total = response.total;
        per_page = response.per_page;
        last_page = response.last_page;
        rows = response.data;
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        loading = false;
    });*/
        //path = data.path;
        current_page = data.thumbs.current_page;
        from = data.thumbs.from;
        to = data.thumbs.to;
        total = data.thumbs.total;
        per_page = data.thumbs.per_page;
        last_page = data.thumbs.last_page;
        rows = data.thumbs.rows;
        loading = false;
    }

    $: changePage(data);  //(e)=> changePage({page: ev.detail.page})
</script>

{#if (design==="bottom")}
    <div class="flex-container">
    <PaginationNav page={current_page} total={total} shown={5} on:change={(e)=>onpage(e.detail.page)}/> 
    </div>
{/if}
<div class={(design==="vertical"||design==="left"||design==="right")?"grid-vertical":"grid-horizontal"}>
        {#if loading}
            <p>loading...</p>
        {/if}
        
        {#each rows as row, i}
        <div class="card">
            <ImageView art={row.name} onclick={onclick}/>
        </div>
        {:else}
                <h5 class="text-center">no results</h5>
        {/each}
</div>
{#if (design!=="bottom")}
    <div class="flex-container">
    <PaginationNav page={current_page} total={total} shown={5} on:change={(e)=>(onpage(e.detail.page))}/> 
    </div>
{/if}

<style>
    .flex-container {
        display: flex;
        justify-content: center;
	    border: 2px dotted;
    }
    .grid-vertical{
        width:100%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(auto-fill, 15em);
        grid-auto-flow: dense;
        padding: 0.5em;
    }
    .card {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(auto-fill, 15em);
        grid-auto-flow: dense;
        padding: 0.5em;
    }
    .grid-horizontal {
        width:100%;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: repeat(auto-fill, 15em);
        grid-auto-flow: dense;
    }
</style>
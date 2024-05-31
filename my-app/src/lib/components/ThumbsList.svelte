<script>
    import { onMount,afterUpdate } from 'svelte';
    import {loadImage} from '$lib/webutils.js';
    import { PaginationNav,Pagination } from "carbon-components-svelte";
    import ImageView from '$lib/components/ImageView.svelte';
    //import fetchData from '$lib/data.js';
    export let design="right"; //left, right,side or top,bottom
    export let onclick=_onclick;
    export let onpage=_onpage;
    export let data; //data from parent
    let rows = [];
    let path = '';
    let current_page = 1;
    let from = 1;
    let to = 1;
    let shown =5;
    let per_page = 1;
    let last_page = 1;
    let total = 0;
    let loading = true,mounted=false;
    const ITEM_WIDTH=200.0;
    function _onclick(e){
        console.log("clcik");
    }
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
        per_page = data.thumbs.per_page;
        current_page = data.thumbs.current_page;
        from = data.thumbs.from;
        to = data.thumbs.to;
        total = data.thumbs.total;
        
        last_page = data.thumbs.last_page;
        rows = data.thumbs.rows;
        loading = false;
        for(var i=0;(mounted && (i<per_page));i++){
            let row=rows[i];
            if(row && !row.isDir){ //Todo placeholderimg for dirs
                loadImage('#img'+i,rows[i].fileName,196);
            }
        }
    }
    afterUpdate(() => {
        //hack: when navigating from a page with 4 items to page with 5 items, the 5. item is not shown
        //because changePage was triggered before all 5 <img> nodes where created. 
		changePage(data);
	});
    onMount(()=>{
      mounted=true;//changePage(data);
      let elmnt=document.querySelector("#Paginator");
      let style = getComputedStyle(elmnt);
      //console.log(style.width);   Todo depending on available space, set per_page and requery list
    });
    $: changePage(data);
</script>
{#if (design==="bottom")}
    <div class="flex-container" id="Paginator">
    <!--<PaginationNav bind:page={current_page} total={last_page} shown={shown} on:change={(e)=>onpage(e.detail.page)}/> -->
        <Pagination bind:page={current_page} pageSize={per_page} totalItems={total} pageSizeInputDisabled={true} on:change={(e)=>onpage(e.detail.page)}/>
    </div>
{/if}
<div id="Thumbslist" class={(design==="vertical"||design==="left"||design==="right")?"grid-vertical":"grid-horizontal"}>
        {#if loading}
            <p>loading...</p>
        {/if}
        
        {#each rows as row, i}
        <div class="card">
            <img id={"img"+i} src="" alt="{row.fileName}" on:click={row.isDir?null:onclick}/>
            <p>{row.name}</p>
            <!--<ImageView url={row.fileName} name={row.name} onclick={onclick}/>-->
        </div>
        {:else}
                <h5 class="text-center">no results</h5>
        {/each}
</div>
{#if (design!=="bottom")}
    <div class="flex-container" id="Paginator">
    <!--<PaginationNav total={last_page} shown={shown} bind:page={current_page} on:change={(e)=>(onpage(e.detail.page))}/> -->
        <Pagination bind:page={current_page} pageSize={per_page} totalItems={total} pageSizeInputDisabled={true} on:change={(e)=>onpage(e.detail.page)}/>
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
        /*display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(auto-fill, 15em);
        grid-auto-flow: dense;*/
        padding: 0.5em;
    }
    .card>img{
        max-width: 100%;
        max-height: 14em;
    } 
    .grid-horizontal {
        width:100%;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: repeat(auto-fill, 15em);
        grid-auto-flow: dense;
    }
</style>
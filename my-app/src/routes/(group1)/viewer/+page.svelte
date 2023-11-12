<script>
    import '$lib/styles/style.svelte';
    import {page} from '$app/stores'
    import { Loading, Button, DataTable, Link } from "carbon-components-svelte";
    import SubtractSVG from "carbon-icons-svelte/lib/SubtractAlt.svelte";
    import { invalidateAll } from '$app/navigation';
    import ZoomFitSVG from "carbon-icons-svelte/lib/ZoomFit.svelte";
    import UserCtrl from '$lib/components/UserCtrlWidget.svelte'
    import Layout from '$lib/components/LySidebarMain.svelte';
    import { onMount,afterUpdate } from 'svelte';
    import {loadImage} from '$lib/webutils.js';
    import { settings } from '$lib/stores.js';
    import {bindResizers} from '$lib/components/UIHelpers.js'
    export let post={
    "postID": 11,
    "name": "Anonymous ",
    "subject": "gthaeg",
    "posterID": null,
    "dateTime": "2023-07-02 15:13:37",
    "fileName": "",
    "postText": "egte",
    "fileExt": "jpeg",
    "replyToID": null
    };
    post.fileName = decodeURIComponent($page.url.searchParams.get('item') ||'');
    let showThumb = true,mounted=false;
    let selectedRowIds = [];
    $: posts=[]; 
    const headers = [
     { key: "X", value: "X" },
     { key: "name", value: "Name" }
    ];

    function buildImagePath(data) {
        post.fileName=data.fileName;
        let idx={id:post.fileName,name:post.fileName};
        if(post.fileName!=""){
            loadImage('#img',post.fileName);
            if(posts.findIndex((el)=>{return(el.id===post.fileName);})===-1) { 
                posts = [...posts, idx];
            }
            selectedRowIds=[idx.id];
        }
    }
    afterUpdate(()=>{
        //buildImagePath(post);//load image if set in url     *1)
    });
    onMount(()=>{
        mounted=true;
        window.addEventListener('message', function(event) {
            //alert(`Received ${JSON.stringify(event.data)} from ${event.origin}`);
            if(event.data.fileName!=undefined) {
                //receive the image to display from main-app
                buildImagePath(event.data);
            } else if (event.data.settings!=undefined){
                //receive theme setting from main-app
                settings.set(event.data.settings);
            }
        });
        if(window.opener) {
            window.opener.postMessage("mounted","*");
        } else {
            //*1) load image if set in url, but the #img-elmnt doesnt exist right now, only after re-render: deffer load 
            setTimeout(()=>{buildImagePath(post)}, 500);
        }
    });
    function toogleSize(){
        let _pag = document?document.getElementById("img"):null;
        if(_pag){
            _pag.classList.toggle("restrictsize");
        }
    }
    function selectimg(evt) {
        buildImagePath({fileName:evt.detail.id});
    }
    function removeimg(row) {//..from list
        posts=posts.filter((el)=>{return(el.id!==row.id)});
    }
</script>

{#if mounted===true}
<Layout>
    <div slot="sidebar" style="display: flex;flex-direction: column;">
        <UserCtrl />
        <div><Button size="field" iconDescription="FullSize" icon={ZoomFitSVG} on:click={(e)=>{toogleSize()}}/></div>
        <DataTable id="imglist" size="short" style="overflow:auto;flex-grow:1;" bind:selectedRowIds headers={headers} rows={posts} on:click:row={(e)=>{selectimg(e)}}> 
            <svelte:fragment slot="cell-header" let:header>  
                {#if header.key !== "X"}
                    {header.value}
                {/if}
            </svelte:fragment>
            <svelte:fragment slot="cell" let:row let:cell>
                {#if cell.key === "X"}
                    <Button size="field" kind="ghost" iconDescription="Remove" icon={SubtractSVG} on:click={(e)=>{removeimg(row)}}/>
                {:else}{cell.value}{/if}
            </svelte:fragment>
        </DataTable>
    </div>
    <div class="viewContainer"> <p>{post.fileName}</p>
        <img id='img' class="postImage restrictsize" src="" alt="{post.fileName}" >
    </div>
    <span slot="footer2" use:bindResizers></span>
</Layout>
{:else}    
    <Loading />
{/if}

<style>
    .viewContainer{
        background-color: var(--secondaryColour);
        color: var(--secondaryAccent);
        padding: 0.5em;
        color: var(--primaryAccent);
        margin: 1em;
        display: inline-block;
        width: 90%;
    }
    .restrictsize {
        max-width:100%; 
        max-height:90vH;
    }
    :global(#imglist > table > thead) {
        visibility:collapse;
    }
    :global(#imglist > table > tbody > tr > td) {
        padding:0px;
    }
</style>
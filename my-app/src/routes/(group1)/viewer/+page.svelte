<script>
    import '$lib/styles/style.svelte';
    import {page} from '$app/stores'
    import { Loading, Button, DataTable } from "carbon-components-svelte";
    import { invalidateAll } from '$app/navigation';
    import ZoomFitSVG from "carbon-icons-svelte/lib/ZoomFit.svelte";
    import UserCtrl from '$lib/components/UserCtrlWidget.svelte'
    import Layout from '$lib/components/LySidebarMain.svelte';
    import { onMount,afterUpdate } from 'svelte';
    import {loadImage} from '$lib/webutils.js';
    import { settings } from '$lib/stores.js';
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
     { key: "name", value: "Name" }
    ];

    function buildImagePath(data) {
        post.fileName=data.fileName;
        let idx={id:post.fileName,name:post.fileName};
        if(post.fileName!=""){
            loadImage('#img',post.fileName)
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
</script>

{#if mounted===true}
<Layout>
    <div slot="sidebar">
        <UserCtrl />
        <Button size="field" iconDescription="FullSize" icon={ZoomFitSVG} on:click={(e)=>{toogleSize()}}/>
        <DataTable size="short" style="overflow:hidden;" bind:selectedRowIds headers={headers} rows={posts} on:click:row={(e)=>{selectimg(e)}} />
    </div>
    <div class="viewContainer"> <p>{post.fileName}</p>
        <img id='img' class="postImage restrictsize" src="" alt="{post.fileName}" >
    </div>
    <span slot="footer2"></span>
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
</style>
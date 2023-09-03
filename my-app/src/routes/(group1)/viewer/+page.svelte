<script>
    import '$lib/styles/style.svelte';
    import {page} from '$app/stores'
    import { Loading } from "carbon-components-svelte";
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
    function buildImagePath(data) {
        post.fileName=data.fileName;
        if(post.fileName!=""){
            loadImage('#img',post.fileName)
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
</script>
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
</style>
{#if mounted===true}
<Layout>
    <UserCtrl slot="sidebar"/>
    <div class="viewContainer"> <p>{post.fileName}</p>
        <img id='img' class="postImage" src="" alt="{post.fileName}" >
    </div>
    <span slot="footer2"></span>
</Layout>
{:else}    
    <Loading />
{/if}

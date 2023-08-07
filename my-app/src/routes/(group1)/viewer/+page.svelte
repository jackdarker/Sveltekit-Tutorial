<script>
    import '$lib/styles/style.svelte';
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
    "fileName": "2fa881f952bddb8cae6a28f096eb9542.jpeg",
    "postText": "egte",
    "fileExt": "jpeg",
    "replyToID": null
    };
    let imagePath, thumbPath;   
    let showThumb = true,mounted=false;
    function buildImagePath(data) {
        post.fileName=data.fileName;
        loadImage('#img',data.fileName)
    }
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
        window.opener.postMessage("mounted","*");
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
    <UserCtrl slot="header2"/>
    <span slot="sidebar"></span>
    <div class="viewContainer"> <p>{post.fileName}</p>
        <img id='img' class="postImage" src="{imagePath}" alt="{post.fileName}" >
    </div>
</Layout>
{:else}    
    <Loading />
{/if}

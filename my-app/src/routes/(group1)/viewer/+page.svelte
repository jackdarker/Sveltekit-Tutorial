<script>
    import { onMount,afterUpdate } from 'svelte';
    import {loadImage} from '$lib/webutils.js';
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
    let showThumb = true;
    function buildImagePath(data) {
        post.fileName=data.fileName;
        loadImage('#img',data.fileName)
    }
    onMount(()=>{
        //receive the image to display from main-app
        window.addEventListener('message', function(event) {
            //alert(`Received ${event.data} from ${event.origin}`);
            if(event.data.fileName!=undefined) {
                    buildImagePath(event.data);
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

<div class="viewContainer"> <p>{post.fileName}</p>
    <img id='img' class="postImage" src="{imagePath}" alt="{post.fileName}" >
</div>
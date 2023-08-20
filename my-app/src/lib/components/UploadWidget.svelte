<script>
    import { goto } from '$app/navigation';
    import { Form,Button } from "carbon-components-svelte";
    export let path ="";
    function dragOverHandler(ev) {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
    }
    async function dropHandler(ev) {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
        let _file ;
        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            [...ev.dataTransfer.items].forEach((item, i) => {
            // If dropped items aren't files, reject them
            if (item.kind === "file") {
                _file = item.getAsFile();
                console.log(`… file[${i}].name = ${file.name}`);
            }
            });
        } else {
            // Use DataTransfer interface to access the file(s)
            [...ev.dataTransfer.files].forEach((file, i) => {
                _file=file;
            console.log(`… file[${i}].name = ${file.name}`);
            });
        }
        let formData = new FormData(document.getElementById("uploadItem"));
        formData.set('file', _file); //could also .append
        formData.append('dir', path); //path as encodeUri
        let url ="?/upload";
        let res = await fetch(url,{
            method: 'POST',
            body: formData,
        });
        let status = await res.status; 
        let response = await res.json(); //sveltekit.error is returned as json
        if (status != 200){
            alert(response.error.message); 
        } else { //reload page but keep url
            //location.reload(); this causes page to flicker because full reload
            goto(location.href, { replaceState:true,invalidateAll:true })   
        }
    }
</script>

<div  id="drop_zone" on:drop={dropHandler} on:dragover={dragOverHandler}>  <p>Drag image here to upload to "{path}".</p></div>
<Form id="uploadItem" action="?/upload" method="post" enctype="multipart/form-data" on:submit={(e)=>{e.preventDefault();uploadItem(e)}} hidden>
    <input type="file" name="file" id="file" accept="image/*"/><Button type="submit">Submit</Button>
</Form>

<style>
    #drop_zone{
        border: 2px solid lightgray;
        width: 200px;
        height: 100px;
    }
</style>
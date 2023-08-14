<script>
    import { onMount } from 'svelte';
    import {bindResizers} from '$lib/components/UIhelpers.js'
    import Dropzone from '$lib/components/Dropzone.svelte'
onMount(()=>{
    bindResizers();
});
let files = {
    accepted: [],
    rejected: []
  };

  function handleFilesSelect(e) {
    const { acceptedFiles, fileRejections } = e.detail;
    files.accepted = [...files.accepted, ...acceptedFiles];
    files.rejected = [...files.rejected, ...fileRejections];
  }
//});

function dragOverHandler(ev) {
  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
}
function dropHandler(ev) {
  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    [...ev.dataTransfer.items].forEach((item, i) => {
      // If dropped items aren't files, reject them
      if (item.kind === "file") {
        const file = item.getAsFile();
        console.log(`… file[${i}].name = ${file.name}`);
      }
    });
  } else {
    // Use DataTransfer interface to access the file(s)
    [...ev.dataTransfer.files].forEach((file, i) => {
      console.log(`… file[${i}].name = ${file.name}`);
    });
  }
}
</script>

<div  id="drop_zone" on:drop={dropHandler} on:dragover={dragOverHandler}>  <p>Drag one or more files to this <i>drop zone</i>.</p></div>
<h1>home</h1>
<p>this is the home page.</p>
<Dropzone on:drop={handleFilesSelect} />
<ol>
  {#each files.accepted as item}
    <li>{item.name}</li>
  {/each}
</ol>
<div style="display: flex; border: 1px solid #cbd5e0;">
    <div>Left</div>
    <div style="width: 4px; border: 2px solid #cbd5e0;" class="resizer" data-direction="horizontal"></div>

    <!-- The right side -->
    <div style="display: flex; flex: 1 1 0%; flex-direction: column">
        <div>Top</div>
        <div style="height: 4px; border: 2px solid #cbd5e0;" class="resizer" data-direction="vertical"></div>
        <div style="flex: 1 1 0%">Bottom</div>
    </div>
</div>

<style>
#drop_zone {
  border: 5px solid blue;
  width: 200px;
  height: 100px;
}
</style>
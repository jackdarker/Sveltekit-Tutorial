<script>
    import { Form,Button } from "carbon-components-svelte";
    export let uploadItem = function(e) { alert("upload me")};
</script>

<Form id="uploadItem" action="?/upload" method="post" enctype="multipart/form-data" on:submit={(e)=>{e.preventDefault();uploadItem(e)}}>
    <input type="file" name="file" id="file" accept="image/*"/><Button type="submit">Submit</Button>
</Form>
<script>
    import TagEditSVG from "carbon-icons-svelte/lib/TagEdit.svelte";
    import { Button, Tag,
        Search  } from "carbon-components-svelte";
    import { page } from '$app/stores';

    export let data;

    let tags =[{id:"red"},{id:"green"},{id:"blue"}];
</script>


<div class="content"><Button icon={TagEditSVG} iconDescription="Edit tags" size="field" href={"/tagger?item="+encodeURIComponent(data.picturename)+"&from="+encodeURIComponent($page.url)}/>
    {#each data.tags as tag, i }
        <Tag id={tag.id} type={tag.color} style={"background-color:"+tag.color+";"}>{tag.name}</Tag>
    {/each}
</div>
<style>
    .content {
    margin:1em;
}
</style>

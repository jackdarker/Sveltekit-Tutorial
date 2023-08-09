<script>
    import SaveSVG from "carbon-icons-svelte/lib/Save.svelte";
    import { Button, Tag,
        Search  } from "carbon-components-svelte";

    let data;

    let tags =[{id:"red"},{id:"green"},{id:"blue"}];
</script>
<div>
    {#each tags as tag, i }
        <Tag id={tag.id} type={tag.id} >{tag.id}</Tag>
    {/each}
</div>


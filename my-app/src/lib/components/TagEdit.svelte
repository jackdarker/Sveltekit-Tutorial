<script>
    import SaveSVG from "carbon-icons-svelte/lib/Save.svelte";
    import { Button, Tag,
        Search  } from "carbon-components-svelte";


    let search = "";
    let tags =[{id:"red"},{id:"green"},{id:"blue"}];

    function onDropTag(id){
        // this doesnt work as it deletes on client side but doesnt force the server to rebuild the page
        //for(var i=tags.length-1;i>=0;i--){
        //    if(tags[i].id===id) tags.splice[i];
        //}
        //...instead toggle delete-flag in the elmnt
    }
</script>

<div><Search size="sm" autocomplete="on" bind:search/><Button size="field" iconDescription="Save" icon={SaveSVG}/></div>
<div>
    {#each tags as tag, i }
        <Tag id={tag.id} type={tag.id} filter on:close={(e)=>(onDropTag(tag.id))}>{tag.id}</Tag>
    {/each}
</div>
<div>
    <Tag type="red">red</Tag>
    <Tag type="magenta" filter on:close>magenta</Tag>
    <Tag type="purple" filter on:close>purple</Tag>
    <Tag type="blue">blue</Tag>
    <Tag type="cyan">cyan</Tag>
    <Tag type="teal">teal</Tag>
    <Tag type="green">green</Tag>
    <Tag type="gray">gray</Tag>
    <Tag type="cool-gray">cool-gray</Tag>
    <Tag type="warm-gray">warm-gray</Tag>
</div>

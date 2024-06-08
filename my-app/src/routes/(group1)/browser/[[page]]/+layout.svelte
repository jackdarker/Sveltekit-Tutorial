<script>
    import { onMount } from 'svelte';
	import '$lib/styles/style.svelte';
    import TagEditSVG from "carbon-icons-svelte/lib/TagEdit.svelte";
    import { ExpandableTile ,Checkbox, Form, TextInput,Button,Tooltip ,InlineNotification  } from "carbon-components-svelte";
    import { fly, slide } from 'svelte/transition';
	import { enhance } from '$app/forms';
    import Search from '$lib/components/Search.svelte';
    import UploadWidget from '$lib/components/UploadWidget.svelte'
    import Layout from '$lib/components/LyHeaderSidebarMain.svelte';
    import TagEdit from '$lib/components/TagEdit.svelte';
    import UserCtrl from '$lib/components/UserCtrlWidget.svelte'
	import ThumbsList from "$lib/components/ThumbsList.svelte";
    import {loadImage,openWindow} from '$lib/webutils.js';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    
    export let form; //is filled out when server responds on form-submision
    export let data; //see load()
    let searchComp;
    let importing = false, content="", search="";
    let picturename='',pictureID=-1,mounted=false,old_per_page=0;
    function onSelectDir(detail){
        const replaceState=false;
        //console.log("select", detail)
        const pageNo=1;
        const path=encodeURIComponent(detail.id);
        search="";
        goto(`/browser/${pageNo}?item=${encodeURIComponent(picturename)}&path=${path}&page=${pageNo}&per_page=${data.thumbs.per_page}`, { replaceState:replaceState,invalidateAll:true })
    }
    function onSearch(detail){
        const replaceState=false;
        const pageNo=1;
        search=detail;
        goto(`/browser/${pageNo}?search=${search}&path=${""/*data.thumbs.path*/}&page=${pageNo}&per_page=${data.thumbs.per_page}`, { replaceState:replaceState,invalidateAll:true })
    }
    function onthumb(e) {
        const replaceState=false;
        picturename=e.currentTarget.alt; //Todo as img.src="blob:html..." we have to use alt="../public/.." instead
        //content="/viewer?item="+picturename;
        goto(`/browser/${data.thumbs.current_page}?search=${search}&item=${encodeURIComponent(picturename)}&path=${data.thumbs.path}&page=${data.thumbs.current_page}&per_page=${data.thumbs.per_page}`, { replaceState:replaceState,invalidateAll:false })
    }
    function loadItem(_data){
        if(mounted!=true) return;
        const _alt = document.querySelector('#img').alt;
        if(_alt == _data.thumbs.item) return; //skip re-load
        pictureID=_data.thumbs.itemId , picturename = _data.thumbs.item;
        loadImage('#img',picturename);
    }
    onMount(()=>{
      mounted=true;
      //let _pag = document?document.getElementById("Paginator"):null; //TODO update Thumbnailview with resize event
      loadImage('#img',picturename); //if returning to page
    });
    async function routeToPage(_pageNo) {
        const replaceState=false;
        let pageNo=_pageNo,THUMB_SIZE=200;
        //let x=$page.route.id;
        let _pag = document?document.getElementById("Thumbslist"):null;
        if(_pag){
            if(_pag.children[0]) THUMB_SIZE=_pag.children[0].offsetWidth;
            data.thumbs.per_page= Math.max(1,Math.trunc(_pag.clientWidth/THUMB_SIZE)); //.offsetWidth
            if(old_per_page && old_per_page!=data.thumbs.per_page) {
                //if per_page changes we need to recalc page
                pageNo =_pageNo*old_per_page/data.thumbs.per_page;
            }
            old_per_page=data.thumbs.per_page;
        }
        goto(`/browser/${pageNo}?item=${encodeURIComponent(picturename)}&path=${data.thumbs.path}&page=${pageNo}&per_page=${data.thumbs.per_page}`, { replaceState:replaceState,invalidateAll:true })
    }
    $:loadItem(data);
</script>


<Layout>
    <!--{#if $page.form?.success}
        <InlineNotification  kind="warning"  title=""  subtitle="{$page.form.message}"/>
    {/if}-->
    <UserCtrl slot="header2"/>
    <span slot="sidebar" >
        <Search onselectdir={onSelectDir} onsearch={onSearch} bind:this={searchComp}/>
        {#if importing===true}
        <p>importing...</p>
        {:else }
        <ExpandableTile style="padding-bottom:0.5em">
            <div slot="above" >Import files...</div>
            <div slot="below">
                <UploadWidget path={data.thumbs.path}/> <p> or import existing files from...</p>
                <form id="import" action="?/import" method="post" enctype="multipart/form-data"  
                    on:submit={(e) => { /*e.preventDefault(); */ }} 
                    use:enhance={({ formElement, formData, action, cancel }) => { importing = true; return async ({ result, update }) => { await update(); importing = false; alert("import done: "+result.data.message); }; }}>
                    <!--<Checkbox name="recursive" labelText="recursive" />-->
                    <TextInput name="dir" autocomplete="off" value="{data.thumbs.path}" readonly />
                    <Button size="field" type="submit" disabled={importing}>import Dir</Button>
                </form>
            </div>
        </ExpandableTile>
        <ExpandableTile style="padding-bottom:0.5em">
            <div slot="above">Create directory...</div>
            <div slot="below">
                <form id="createDir" action="?/createDir" method="post" enctype="multipart/form-data"  
                    on:submit={(e) => { /*e.preventDefault(); */ }} 
                    use:enhance={({ formElement, formData, action, cancel }) => { importing = true; 
                        return async ({ result, update }) => { await update(); importing = false; searchComp.loadDir(""); alert("creation done: "+result.data.message); }; }}>
                    <!--<Checkbox name="recursive" labelText="recursive" />-->
                    <TextInput name="dir" autocomplete="off" on:click={(e) => {e.stopPropagation();}} value="{data.thumbs.path}" />
                    <Button size="field" type="submit" disabled={importing}>create Dir</Button>
                </form>
            </div>
        </ExpandableTile>
        {/if}
    </span>
    <div class="content" slot="content" style="display: flex">
        <!--iframe src={content}></iframe>-->
        <div>
            <img class="medsize" id="img" src="" alt="" on:click={()=>openWindow({fileName:picturename})}/>
            <p>({pictureID}) {picturename}</p>
            {#if pictureID>0} <TagEdit data={{picturename:picturename,pictureID:pictureID, tags:data.thumbs.itemTags}}/> 
            {:else}<Tooltip> Tags not editable as image is located in directory but not in database. Use import first.</Tooltip>  {/if}
        </div>
    </div>
    <!--{#key $page.url.pathname}-->
    <ThumbsList slot="footer" design="top" onclick={onthumb} data={data} onpage={routeToPage}/>
    <!--{/key}-->
    <slot />
</Layout>


<style>
    /*todo switch between fullview and fit-to-screen; how to query size?*/
    .content {
        overflow: overlay;
        height: 100%;
        max-height: 100%; 
    }
.medsize{ 

    max-height: 100%; 
    max-width: 100%; 
}
.content {
    padding:1em;
}

/*div[slot="above"]{
    padding:1em;
}*/
</style>
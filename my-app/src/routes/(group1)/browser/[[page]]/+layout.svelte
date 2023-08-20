<script>
    import { onMount } from 'svelte';
	import '$lib/styles/style.svelte';
    import TagEditSVG from "carbon-icons-svelte/lib/TagEdit.svelte";
    import { Form,Button } from "carbon-components-svelte";
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
    let picturename='',pictureID=-1,mounted=false;
    function onSelectDir(detail){
        const replaceState=false;
        //console.log("select", detail)
        const pageNo=1;
        const path=encodeURIComponent(detail.id);
        goto(`/browser/${pageNo}?item=${encodeURIComponent(picturename)}&path=${path}&page=${pageNo}`, { replaceState:replaceState,invalidateAll:true })
    }
    function onthumb(e) {
        const replaceState=false;
        picturename=e.currentTarget.alt; //Todo as img.src="blob:html..." we have to use alt="../public/.." instead
        goto(`/browser/${data.thumbs.current_page}?item=${encodeURIComponent(picturename)}&path=${data.thumbs.path}&page=${data.thumbs.current_page}`, { replaceState:replaceState,invalidateAll:true })
    }
    function loadItem(_data){
        pictureID=_data.thumbs.itemId , picturename = _data.thumbs.item;
        if(mounted!=true) return;
        loadImage('#img',picturename);
    }
    onMount(()=>{
      mounted=true;
      loadImage('#img',picturename); //if returning to page
    });
    async function routeToPage(_pageNo) {
        const replaceState=false;
        const pageNo=_pageNo;
        //let x=$page.route.id;
        goto(`/browser/${pageNo}?item=${encodeURIComponent(picturename)}&path=${data.thumbs.path}&page=${pageNo}`, { replaceState:replaceState,invalidateAll:true })
    }
    async function uploadItem(event){
        let formData = new FormData(document.getElementById("uploadItem"));
        //formData.set('idlist', ids); //could also .append
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
    $:loadItem(data);
</script>


<Layout>
    <UserCtrl slot="header2"/>
    <span slot="sidebar">
        <Search onselectdir={onSelectDir}/>
        <UploadWidget path={data.thumbs.path}/>
    </span>
    <div class="content" style="display: flex">
        <div>
            <img class="medsize" id="img" src="" alt="" on:click={()=>openWindow({fileName:picturename})}/>
            <p>({pictureID}) {picturename}</p>
            {#if pictureID>0} <TagEdit data={{picturename:picturename,pictureID:pictureID, tags:data.thumbs.itemTags}}/> {/if}
        </div>
    </div>
    <!--{#key $page.url.pathname}-->
    <ThumbsList slot="footer" design="top" onclick={onthumb} data={data} onpage={routeToPage}/>
    <!--{/key}-->
    <slot />
</Layout>


<style>
    /*todo switch between fullview and fit-to-screen; how to query size?*/
.medsize{ 
    max-width: 40em; 
    max-height: 40em;
}
.content {
    margin:1em;
}
</style>
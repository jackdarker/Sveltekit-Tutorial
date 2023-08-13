<script>
    import { onMount } from 'svelte';
	import '$lib/styles/style.svelte';
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
    export let data;
    let path="",pageNo=1; //the actual directory and page-Index
    let picturename='',mounted=false;
    function onSelectDir(detail){
        const replaceState=false;
        //console.log("select", detail)
        pageNo=1;
        path=encodeURIComponent(detail.id);
        goto(`/browser/${pageNo}?item=${encodeURIComponent(picturename)}&path=${path}&page=${pageNo}`, { replaceState:replaceState,invalidateAll:true })
    }
    function onthumb(e) {
        const replaceState=false;
        picturename=e.currentTarget.alt; //Todo as img.src="blob:html..." we have to use alt="../public/.." instead
        goto(`/browser/${pageNo}?item=${encodeURIComponent(picturename)}&path=${path}&page=${pageNo}`, { replaceState:replaceState,invalidateAll:true })
    }
    function loadItem(_data){
        picturename = _data.thumbs.item;
        if(mounted!=true) return;
        loadImage('#img',picturename);
    }
    onMount(()=>{
      mounted=true;
      loadImage('#img',picturename); //if returning to page
    });
    async function routeToPage(_pageNo) {
        const replaceState=false;
        pageNo=_pageNo;
        //let x=$page.route.id;
        goto(`/browser/${pageNo}?item=${encodeURIComponent(picturename)}&path=${path}&page=${pageNo}`, { replaceState:replaceState,invalidateAll:true })
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
        <Form id="uploadItem" action="?/upload" method="post" enctype="multipart/form-data" on:submit={(e)=>{e.preventDefault();uploadItem(e)}}>
            <input type="file" name="file" id="file" accept="image/*"/><Button type="submit">Submit</Button>
        </Form>
        <UploadWidget />
    </span>
    <div class="content" style="display: flex">
        <div>
            <img class="medsize" id="img" src="" alt="" on:click={()=>openWindow({fileName:picturename})}/>
            <p>{picturename}</p><a href={"/tagger?item="+encodeURIComponent(picturename)+"&from="+$page.url}>Edit tags</a>
        </div>
        <div><TagEdit /></div>
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
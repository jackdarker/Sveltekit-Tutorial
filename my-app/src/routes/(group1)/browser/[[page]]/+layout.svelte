<script>
    import { onMount } from 'svelte';
	import '$lib/styles/style.svelte';
    import Search from '$lib/components/Search.svelte';
    import Layout from '$lib/components/LyHeaderSidebarMain.svelte';
    import TagEdit from '$lib/components/TagEdit.svelte';
    import UserCtrl from '$lib/components/UserCtrlWidget.svelte'
	import ThumbsList from "$lib/components/ThumbsList.svelte";
    import {loadImage,openWindow} from '$lib/webutils.js';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    export let data;
    let path="",pageNo=1;
    let picturename;
    function onSelectDir(detail){
        const replaceState=false;
        //console.log("select", detail)
        pageNo=1;
        path=encodeURIComponent(detail.id);
        goto(`/browser/${pageNo}?path=${path}&page=${pageNo}`, { replaceState:replaceState,invalidateAll:true })
    }
    function onthumb(e) {
        picturename=e.currentTarget.alt; //Todo as img.src="blob:html..." we have to use alt="../public/.." instead
        loadImage('#img',picturename);
        //picture=e.currentTarget.ariaLabel;
        //picturename = e.currentTarget.name;
    }
    
    async function routeToPage(_pageNo) {
        const replaceState=false;
        pageNo=_pageNo;
        //let x=$page.route.id;
        //goto(`/`).then(()=>
        //goto(`/browser/${pageNo}?page=${pageNo}`, { replaceState:replaceState,invalidateAll:true })
        //  /browser?path=thumbs&page=2
        goto(`/browser/${pageNo}?path=${path}&page=${pageNo}`, { replaceState:replaceState,invalidateAll:true })
        // );
    }
</script>
<Layout>
    <UserCtrl slot="header2"/>
    <span slot="sidebar"><Search onselectdir={onSelectDir}/></span>
    <div style="display: flex">
    <div>
        <img class="medsize" id="img" src="" alt="" on:click={()=>openWindow({fileName:picturename})}/>
        <p>{picturename}</p><a href="/tagger">Edit tags</a>
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
</style>
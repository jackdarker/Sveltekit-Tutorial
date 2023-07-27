<script>
    import { onMount } from 'svelte';
    import Search from '$lib/components/Search.svelte';
    import Layout from '$lib/components/HeaderSidebarMain.svelte';
    import Nav from "$lib/components/Nav.svelte";
    import ImageView from '$lib/components/ImageView.svelte';
	import ThumbsList from "$lib/components/ThumbsList.svelte";
    import {loadImage,openWindow} from '$lib/webutils.js';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    export let data;
    let picture="..\\public\\Icon.1_01.png",picturename;
    onMount(()=>{
        //loadImage('#img','D:/public/_pics/1496956336.tomatocoup_cuffs_ring.jpg');
    });
    function onthumb(e) {
        picturename=e.currentTarget.alt; //Todo as img.src="blob:html..." we have to use alt="../public/.." instead
        loadImage('#img',picturename);
        //picture=e.currentTarget.ariaLabel;
        //picturename = e.currentTarget.name;
    }
    
    async function routeToPage(route) {
        const replaceState=false;
        let x=$page.route.id;
        //goto(`/`).then(()=>
        goto(`/browser/${route}`, { replaceState:replaceState,invalidateAll:true })
        // );
    }
</script>
<Layout>
    <Nav slot="header"/>
    <span slot="sidebar"><Search /></span>
    <div>
    <img class="medsize" id="img" src="" alt="" on:click={()=>openWindow({fileName:picturename})}/>
    <a href="/" target="_blank">{picturename}</a>
    <p>{picturename}</p>
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
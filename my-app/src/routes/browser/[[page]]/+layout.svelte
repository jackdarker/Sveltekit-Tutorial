<script>
    import Search from '$lib/components/Search.svelte';
    import Layout from '$lib/components/HeaderSidebarMain.svelte';
    import ImageView from '$lib/components/ImageView.svelte';
	import ThumbsList from "$lib/components/ThumbsList.svelte";
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    export let data;
    let picture="..\\art\\Icon.1_01.png",picturename;
    function onthumb(e) {
        picture=e.currentTarget.ariaLabel;
        picturename = e.currentTarget.name;
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
    <span slot="sidebar"><Search /></span>
    <div>
    <img src={picture} />
    <p>{picturename}</p>
    </div>
    <!--{#key $page.url.pathname}-->
    <ThumbsList slot="footer" design="top" onclick={onthumb} data={data} onpage={routeToPage}/>
    <!--{/key}-->
    <slot />
</Layout>

<script>
    import Search from '$lib/components/Search.svelte';
    import Layout from '$lib/components/HeaderSidebarMain.svelte';
    import ImageView from '$lib/components/ImageView.svelte';
	import ThumbsList from "$lib/components/ThumbsList.svelte";
    let picture="Icon.1_01.png";
    function onthumb(e) {
        picture=e.currentTarget.ariaLabel;
    }
</script>
<Layout>
    <span slot="sidebar"><Search /></span>
    <ImageView art={picture}/>
    <ThumbsList slot="footer" design="top" onclick={onthumb}/>
    <slot />
</Layout>

<script>
    import Search from '$lib/components/Search.svelte';
    import Layout from '$lib/components/HeaderSidebarMain.svelte';
    import ImageView from '$lib/components/ImageView.svelte';
</script>
<Layout>
    <span slot="Search"><Search /></span>
    <img class="center" slot="Image" src="art/Icon.1_01.png" alt="Icon.1_01" />
    <slot />
</Layout>

<style>
    .center {
        position_: absolute;
        right_: 10%;
	}
</style>
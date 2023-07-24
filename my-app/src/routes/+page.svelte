<script>
	import Nav from "$lib/components/Nav.svelte";
	import ImageView from "$lib/components/ImageView.svelte"

   import Icon from "$lib/assets/icon.png"
</script>

<Nav />
<h1>home</h1>
<p>this is the home page.</p>
<img src="art\\Icon.1_02.png" /><img src={Icon} />
<img src="../../../../../../public/_pics/1496956336.tomatocoup_cuffs_ring.jpg" />
<ImageView art="Icon.1_02.png" />

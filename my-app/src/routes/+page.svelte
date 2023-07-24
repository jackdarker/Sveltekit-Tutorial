<script>
	import { onMount } from 'svelte';
	import {loadImage} from "$lib/webutils.js"
	import Nav from "$lib/components/Nav.svelte";
	import ImageView from "$lib/components/ImageView.svelte"

   import Icon from "$lib/assets/icon.png"
   let number;
   let imgUrl='art\\Icon.1_02.png';
   onMount(()=>{
   	loadImage('#img','../public/Icon.1_01.png');
   });
</script>

<Nav />
<h1>home</h1>
<p>this is the home page.</p>
<button on:click={()=>{loadImage('#img','D:/public/_pics/54081f11593585976445ab98d3250a5a.jpg')}}>Roll the dice</button>

{#if number !== undefined}
	<p>You rolled a {number}</p>
{/if}
<br/>
<p>{imgUrl}</p>
<img id="img" src={imgUrl} alt={imgUrl}/>

<br/>
<img src="art\\Icon.1_02.png" alt=""/><img src={Icon} />
<!--<img src="../../../../../../public/_pics/1496956336.tomatocoup_cuffs_ring.jpg" />-->
<ImageView art="Icon.1_02.png" />

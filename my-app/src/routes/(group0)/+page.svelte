<script>
    import { onMount } from 'svelte';
    import {bindResizers} from '$lib/components/UIhelpers.js'
    import Dropzone from '$lib/components/Dropzone.svelte'
onMount(()=>{
    bindResizers();
});

</script>


<h1>home</h1>
<p>this is the home page.</p>

<div style="display: flex; border: 1px solid #cbd5e0;">
    <div>Left</div>
    <div style="width: 4px; border: 2px solid #cbd5e0;" class="resizer" data-direction="horizontal"></div>

    <!-- The right side -->
    <div style="display: flex; flex: 1 1 0%; flex-direction: column">
        <div>Top</div>
        <div style="height: 4px; border: 2px solid #cbd5e0;" class="resizer" data-direction="vertical"></div>
        <div style="flex: 1 1 0%">Bottom</div>
    </div>
</div>

<style>

</style>
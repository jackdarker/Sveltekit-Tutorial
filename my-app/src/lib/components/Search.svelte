<script>
  import {
    Form,FormGroup,Checkbox,RadioButtonGroup, RadioButton,Select,SelectItem,Button,ContentSwitcher, Switch, Search,
    TreeView
  } from "carbon-components-svelte";
  import { onMount,afterUpdate } from 'svelte';
  import {loadDirectory} from '$lib/webutils.js'
  export let onselectdir=_onselectdir;
  export let onsearch=_onsearch;
  let activeId = "";
  let mounted=false;
  let selectedIds = [];
  let children = [], dirlookup={}, nodesToLoad=[];
  let selectedIndex = 0;
  let searchterm="";
  const ROOT_ID="_ROOT_";

  function _onselectdir(detail){
    console.log("select", detail)
  }
  function _onsearch(detail){
    console.log("search", detail)
  }
  function updateDirTree(dirtree,updateID) {    
    let node;
    if(updateID==="") { //root
      children=[{id:ROOT_ID,text:ROOT_ID,children:dirtree}];
    } else {
      node=dirlookup[updateID];
      node.children=(dirtree.length===0)?null:dirtree;
    }   
    for(var i=0;i<dirtree.length;i++){
      //append dir to lookup; create children-placeholder
      let sub = dirtree[i];
      sub.children=[];
      dirlookup[sub.id]=sub;
      nodesToLoad.push(sub.id);
    }
    //select next subelement to fetch (broadfirst)
    if(nodesToLoad.length>0) {
      loadDir(nodesToLoad.shift());
    }
  }
  function loadDir(path){
    loadDirectory(path)
    .then(function (response) {
        updateDirTree(response.dirs,path)
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {});
  }
  afterUpdate(() => {
    //loadDir();  dont call or creates loop
		//updateDirTree(dirtree);
	});
    onMount(()=>{
      mounted=true;
      children = [], dirlookup={}, nodesToLoad=[];
      loadDir("");
    });
  //$: updateDirTree(dirtree);
  
</script>

<aside>
  <!--<p>{JSON.stringify(dirlookup)}</p>-->
  <ContentSwitcher size="sm" bind:selectedIndex>
    <Switch title="search for tags" text="Tags" />
    <Switch title="search directorys" text="Directorys" />
  </ContentSwitcher>
  {#if selectedIndex===0}
    <Form on:submit={(e) => {
        e.preventDefault();
        onsearch(searchterm);
    }}>
    <Search bind:value={searchterm} placeholder="Search catalog..." />
    </Form>
  {:else}
    <Form on:submit={(e) => {e.preventDefault();}}>
    <TreeView id="DirTree" style="min-height: 0; max-height: calc(100vH - 150px);; overflow: overlay;" {children} bind:activeId  bind:selectedIds
      on:select={({ detail }) => {detail.id=(detail.id===ROOT_ID)?"":detail.id;onselectdir(detail);}}
    />
    <!-- TODO
      fix height limit
      for some reason ROOT cannot be closed once opened
    -->
    </Form>
  {/if}
</aside>

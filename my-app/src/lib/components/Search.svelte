<script>
  import {
    Form,FormGroup,Checkbox,RadioButtonGroup, RadioButton,Select,SelectItem,Button,ContentSwitcher, Switch, Search,
    TreeView
  } from "carbon-components-svelte";
  import { onMount,afterUpdate } from 'svelte';
  import {loadDirectory} from '$lib/webutils.js'
  export let onselectdir=_onselectdir;
  let activeId = "";
  let mounted=false;
  let selectedIds = [];
  let children = [];
  let dirlookup={}, nodesToLoad=[];
  let _loadingNode=null;
  let selectedIndex = 0;
  let searchterm="";

  function _onselectdir(detail){
    console.log("select", detail)
  }
  function updateDirTree(dirtree,updateID) {    
    let node;
    if(updateID==="") { //root
      children=[{id:"ROOT",text:"ROOT",children:dirtree}];
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
    .finally(() => {
    });
  }
  afterUpdate(() => {
    //loadDir();  dont call or creates loop
		//updateDirTree(dirtree);
	});
    onMount(()=>{
      mounted=true;
      loadDir("");
    });
  //$: updateDirTree(dirtree);
  
  
</script>

<aside>
  <!--<p>{JSON.stringify(dirlookup)}</p>-->
  <ContentSwitcher bind:selectedIndex>
    <Switch text="Tags" />
    <Switch text="Directorys" />
  </ContentSwitcher>
  {#if selectedIndex===0}
    <Form
    on:submit={(e) => {
        e.preventDefault();
        console.log("submit", e);
    }}
    >
    <Search bind:value={searchterm} placeholder="Search catalog..." />
    <Checkbox id="checkbox-0" labelText="Checkbox Label" checked />
    <Button type="submit">Submit</Button>
    </Form>
  {:else}
    <Form
    on:submit={(e) => {
        e.preventDefault();
        console.log("submit", e);
    }}
    >
    <TreeView {children} bind:activeId  bind:selectedIds
      on:select={({ detail }) => {detail.id=(detail.id==="ROOT")?"":detail.id;onselectdir(detail);}}
    />
    </Form>
  {/if}
</aside>
<script>
  import {
    Form,FormGroup,Checkbox,RadioButtonGroup, RadioButton,Select,SelectItem,Button,ContentSwitcher, Switch, Search,
    TreeView
  } from "carbon-components-svelte";
  import { onMount,afterUpdate } from 'svelte';
  import {loadDirectory} from '$lib/webutils.js'
  let activeId = "";
  let mounted=false;
  let selectedIds = [];
  let children = [
    { id: 0, text: "AI / Machine learning" },
    {
      id: 1,
      text: "Analytics",
      children: [
        {
          id: 2,
          text: "IBM Analytics Engine",
          children: [
            { id: 3, text: "Apache Spark" },
            { id: 4, text: "Hadoop" },
          ],
        },
        { id: 5, text: "IBM Cloud SQL Query" },
        { id: 6, text: "IBM Db2 Warehouse on Cloud" },
      ],
    },
    {
      id: 7,
      text: "Blockchain",
      children: [{ id: 8, text: "IBM Blockchain Platform" }],
    },
    {
      id: 9,
      text: "Databases",
      children: [
        { id: 10, text: "IBM Cloud Databases for Elasticsearch" },
        { id: 11, text: "IBM Cloud Databases for Enterprise DB" },
        { id: 12, text: "IBM Cloud Databases for MongoDB" },
        { id: 13, text: "IBM Cloud Databases for PostgreSQL" },
      ],
    },
    {
      id: 14,
      text: "Integration",
      disabled: true,
      children: [{ id: 15, text: "IBM API Connect", disabled: true }],
    },
  ];
  export let dirtree=[];
  let selectedIndex = 0;
  let searchterm="";
  function updateDirTree(dirtree) {
  }
  afterUpdate(() => {
    //loadDir();
		//updateDirTree(dirtree);
	});
    onMount(()=>{
      mounted=true;loadDir();
    });
  $: updateDirTree(dirtree);
  function loadDir(){
    loadDirectory("")
    .then(function (response) {
        dirtree=response;
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
    });
  }
  
</script>

<aside>
  <p>{JSON.stringify(dirtree)}</p>
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
    <TreeView
      labelText="Cloud Products"
      {children}
      bind:activeId
      bind:selectedIds
      on:select={({ detail }) => console.log("select", detail)}
      on:toggle={({ detail }) => console.log("toggle", detail)}
      on:focus={({ detail }) => console.log("focus", detail)}
    />
    </Form>
  {/if}
</aside>
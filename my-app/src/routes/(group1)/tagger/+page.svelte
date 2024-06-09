<script>
    import '$lib/styles/style.svelte';
    import {page} from '$app/stores'
    import { goto } from '$app/navigation';
    import UserCtrl from '$lib/components/UserCtrlWidget.svelte'
    import SaveSVG from "carbon-icons-svelte/lib/Save.svelte";
    import UndoSVG from "carbon-icons-svelte/lib/Undo.svelte";
    import ChevronLeftSVG from "carbon-icons-svelte/lib/ChevronLeft.svelte";
    import { Button, Tag,Form, TextInput, Search, Select, SelectItem } from "carbon-components-svelte";
	import UserCtrlWidget from '$lib/components/UserCtrlWidget.svelte';
    import {RalColors} from "$lib/webutils.js";
    const redirectTo = decodeURIComponent($page.url.searchParams.get('from') ||'');
    export let data;  //see page.server.js#load

    let search = "",modified=false;
    let locAssignedTags =[]; //tags are assigned to local variables when manipulated in the client
    let locUnassignedTags =[];

    function onDropTag(id){
        // this doesnt work as it deletes on client side but doesnt force the server to rebuild the page
        //for(var i=tags.length-1;i>=0;i--){
        //    if(tags[i].id===id) tags.splice[i];
        //}
        //...instead toggle delete-flag in the elmnt
        let form=document.forms["myForm2"]
        form["id"].value=id;
        form.submit();
    }
    function afterReload(_data){    //refresh local data with loaded data
        locAssignedTags=[];locUnassignedTags=[];
        let tag,index;
        for(var i=0;i<_data.myTags.length;i++){
            locAssignedTags.push(_data.myTags[i])
        };
        for(var i=0;i<_data.allTags.length;i++){
            tag=_data.allTags[i];
            index = locAssignedTags.findIndex((e)=>{return(e.id===tag.id)});
            if(index<0) locUnassignedTags.push(tag)
        };
        locAssignedTags=locAssignedTags;
        locUnassignedTags=locUnassignedTags;
        modified=false;
    }
    function assignTags(tag,unassign){ //move tags from Unassinged to assigned, but this is only stored locally in the client. Transmission to server is done with Save-Button
        let from,to;
        if(unassign) from=locAssignedTags,to=locUnassignedTags;
        else to=locAssignedTags,from=locUnassignedTags;
        to.push(tag);
        let i = from.findIndex((e)=>{return(e.id===tag.id)});
        if(i>=0) from.splice(i,1);
        locAssignedTags=locAssignedTags;
        locUnassignedTags=locUnassignedTags;
        modified=true;
    }
    function uploadAssign_old(){
        // this doesnt work as it deletes on client side but doesnt force the server to rebuild the page
        //for(var i=tags.length-1;i>=0;i--){
        //    if(tags[i].id===id) tags.splice[i];
        //}
        //...instead send a form with the data
        let ids="";
        for(var i=0;i<locAssignedTags.length;i++){
            ids+=locAssignedTags[i].id+",";
        }
        ids=ids.substring(0,ids.length-1);
        let form=document.forms["assignForm"]; //see form-node with this name
        form["idlist"].value=ids;
        form.submit();  //this forces reload of page and also replaces url with form-action
    }
    async function uploadAssign(){
        let ids="";
        for(var i=0;i<locAssignedTags.length;i++){
            ids+=locAssignedTags[i].id+",";
        }
        ids=ids.substring(0,ids.length-1);
        let formData = new FormData(document.getElementById("assignForm"));
        formData.set('idlist', ids); //could also .append
        formData.append('postid',data.item.id);
        let url ="?/assign";
        let res = await fetch(url,{
            method: 'POST',
            body: formData,
        });

        let status = await res.status
        let response = await res.json();
        console.log(status);
        if (status != 200){
            alert(response.error);
        } else {
            goto(location.href, { replaceState:true,invalidateAll:true })
            //location.reload(); this causes page to flicker because full reload
        }
    }
    function complColor(colorA){
        let _tmp=0xFFFFFF-parseInt(colorA.replace("#",""), 16); 
        //TODO this is complementary color but gray complements gray
        return("#"+_tmp.toString(16));
    }
    function updateColor(A,BG,FG){
        let _a=document.querySelector(A);
        let _bg=document.querySelector(BG);
        let _fg=document.querySelector(FG);
        _a.style.color=_fg.value;
        _a.style["background-color"]=_bg.value;
    }
    function updateColorByGroup(A,B){
        let _a=document.querySelector(A);
        let _b=document.querySelector(B);
        data.tagGroups.forEach((x)=>{
            if(x.id==_b.value){
                _a.style.color=x.fgcolor;
                _a.style["background-color"]=x.color;
            }
        });

    }
    function revertAssign(){ //restore with last loaded server data
        afterReload(data)
    }
    function validateForm(e) {
        let x = document.forms["myForm"]["id"].value;
        if (x == "") {
            alert("Name must be filled out");
            e.preventDefault();
        }
    }
    $:afterReload(data);
</script>
<UserCtrlWidget /> <hr>
<div>
    <Button size="field" iconDescription="Back" icon={ChevronLeftSVG} href={redirectTo}/>
    <Button disabled={!modified} size="field" iconDescription="Save" icon={SaveSVG} on:click={(e)=>{uploadAssign()}}/>
    <Button disabled={!modified} size="field" iconDescription="Undo" icon={UndoSVG} on:click={(e)=>{revertAssign()}}/>
    <span>Editing {data.item.name}</span>
</div>

<div class="myForm">
<div><p>Unassigned Tags</p><Search size="sm" autocomplete="on" bind:search/>
    {#each locUnassignedTags as tag, i }
        <Tag id={tag.id} type={tag.color} style={"background-color:"+tag.color+";color:"+tag.fgcolor+";"} interactive on:click={(e)=>(assignTags(tag))}>{tag.name}</Tag>
    {/each}
</div></div>
<div class="myForm">
<div><p>Assigned Tags</p>
    {#each locAssignedTags as tag, i }
        <Tag id={tag.id} type={tag.color} style={"background-color:"+tag.color+";color:"+tag.fgcolor+";"} interactive on:click={(e)=>(assignTags(tag,true))}>{tag.name}</Tag>
    {/each}
</div>
</div>
<div class="myForm">
<Form  method="POST" action="?/create">
    <label > create/modify a tag:
        <TextInput inline="true" id="tagname" labelText="Name" name="id" autocomplete="off"/>
        <TextInput inline="true" labelText="New-Name" name="newname" autocomplete="off"/>
        <Select inline="true" id="taggroup" labelText="group" name="group" on:update={(e)=>{updateColorByGroup("#tagname","#taggroup")}}>
            {#each data.tagGroups as group, i}
                <SelectItem value={group.id} text={group.name} />
            {/each}
        </Select>
        <input type="submit" />
    </label>
</Form></div>
<div class="myForm">
<Form name="myForm" method="POST" action="?/delete" on:submit={(e)=>{validateForm(e)}}>
    <label> delete a tag:
        <TextInput name="id" autocomplete="off" /><input type="submit" />
    </label>
</Form></div>
<Form name="myForm2" method="POST" action="?/delete" on:submit={(e)=>{validateForm(e)}} hidden>
    <label>
        delete a tag:
        <input name="id"  autocomplete="off" />
    </label>
</Form>
<div class="myForm">
    <Form  method="POST" action="?/createGroup">
        <label > create/modify a group: (TODO: delete is not implemented)
            <TextInput id="groupname" inline="true" labelText="Name" name="name" autocomplete="off"/>
            <TextInput inline="true" labelText="New-Name" name="newname" autocomplete="off"/>
            <Select inline="true" id="groupcolor" labelText="color" name="color" on:update={(e)=>{updateColor("#groupname","#groupcolor","#groupfgcolor")}}>
                {#each RalColors as group, i}
                    <SelectItem value={group[1]} text={group[2]} style={"background-color:"+group[1]+";color:"+complColor(group[1])+";"} }/>
                {/each}
            </Select>
            <Select inline="true" id="groupfgcolor" labelText="fgcolor" name="fgcolor" on:update={(e)=>{updateColor("#groupname","#groupcolor","#groupfgcolor")}}>
                {#each RalColors as group, i}
                    <SelectItem value={group[1]} text={group[2]} style={"background-color:"+group[1]+";color:"+complColor(group[1])+";"} }/>
                {/each}
            </Select>
            <input type="submit" />
        </label>
    </Form>
</div>
<Form name="assignForm" id="assignForm" method="POST" enctype="multipart/form-data" action="?/assign" on:submit={(e)=>{validateForm(e)}} hidden>
    <input name="idlist" autocomplete="off"/>
</Form>

<style>
    .myForm {
        margin: 0.5em;
        padding: 0.5em;
        border-style: solid;
        border-width: 2px;
    }
</style>
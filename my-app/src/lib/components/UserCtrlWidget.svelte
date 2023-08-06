<script>
	import '$lib/styles/style.svelte';
    import SettingsSVG from "carbon-icons-svelte/lib/Settings.svelte";
    import LoginSVG from "carbon-icons-svelte/lib/Login.svelte";
    import LogoutSVG from "carbon-icons-svelte/lib/Logout.svelte";
	import {
        Theme,
        Dropdown,
        Button,
    } from "carbon-components-svelte";
    import { onDestroy } from 'svelte';
    import { get } from 'svelte/store';
    import { settings } from '$lib/stores.js';
    let theme = "white";
    settings.loadFromLocalStorage();
    theme = settings.theme;
    const unsubscribe = settings.subscribe(value => {
        //hack: cannot use <Theme bind:{$settings.theme}}/>  ??
        theme = value.theme;
    });
    onDestroy(unsubscribe);
</script>
<Theme bind:theme/>
<!--<RadioButtonGroup legendText="Carbon theme" bind:selected={theme}>
	{#each ["white", "g10", "g80", "g90", "g100"] as value}
	  <RadioButton labelText={value} {value} />
	{/each}
  </RadioButtonGroup>
-->
<div>
    <Button size="field" iconDescription="Settings" icon={SettingsSVG}/>
    <Button size="field" iconDescription="Logout" icon={LogoutSVG}/>
    <Dropdown
    titleText="Theme"
    type="inline"
    bind:selectedId={$settings.theme}
    items={[
        { id: "white", text: "white" },
        { id: "g80", text: "g80" },
        { id: "g100", text: "g100" },
    ]}
    />
</div>

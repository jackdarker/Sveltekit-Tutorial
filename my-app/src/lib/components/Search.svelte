<script>
  import {
    Form,
    FormGroup,
    Checkbox,
    RadioButtonGroup,
    RadioButton,
    Select,
    SelectItem,
    Button,
    Search
  } from "carbon-components-svelte";

let searchterm="";
</script>

<aside>
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
</aside>
import { c as create_ssr_component, d as add_attribute } from './ssr-563293b8.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let content = "/about";
  return `<h1 data-svelte-h="svelte-1bgpw6n">home</h1> <p data-svelte-h="svelte-a2q1pj">this is the home page.</p> <div style="display: flex; border: 1px solid #cbd5e0;" data-svelte-h="svelte-zijk8q"><div>Left</div> <div style="width: 4px; border: 2px solid #cbd5e0;" class="resizer" data-direction="horizontal"></div>  <div style="display: flex; flex: 1 1 0%; flex-direction: column"><div>Top</div> <div style="height: 4px; border: 2px solid #cbd5e0;" class="resizer" data-direction="vertical"></div> <div style="flex: 1 1 0%">Bottom</div></div></div> <button data-svelte-h="svelte-1yvrz8o">to A</button><button data-svelte-h="svelte-nv2hsk">to B</button> <iframe${add_attribute("src", content, 0)}></iframe>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-ea086c23.js.map

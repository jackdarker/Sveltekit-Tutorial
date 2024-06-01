import { c as create_ssr_component, b as each, e as escape } from './ssr-563293b8.js';

const css = {
  code: "@media(min-width: 640px){.layout.svelte-1ubx6uq{display:grid;gap:2em;grid-template-columns:1fr 16em}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="layout svelte-1ubx6uq"><main>${slots.default ? slots.default({}) : ``}</main> <aside><h3 data-svelte-h="svelte-15owaf6">More posts</h3> <ul>${each(data.summaries, ({ slug, title }) => {
    return `<li><a href="${"/blog/" + escape(slug, true)}">${escape(title)}</a> </li>`;
  })}</ul></aside> </div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-70dee3b7.js.map

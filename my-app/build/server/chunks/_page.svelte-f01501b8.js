import { c as create_ssr_component, b as each, e as escape } from './ssr-563293b8.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-cvg234">blog</h1> <ul>${each(data.summaries, ({ slug, title }) => {
    return `<li><a href="${"/blog/" + escape(slug, true)}">${escape(title)}</a></li>`;
  })}</ul>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-f01501b8.js.map

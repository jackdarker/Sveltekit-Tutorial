import { c as create_ssr_component, e as escape } from './ssr-563293b8.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let data2 = { views: 0 };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h3>${escape(data.post.title)}</h3> <div><!-- HTML_TAG_START -->${data.post.content}<!-- HTML_TAG_END --></div> <p></p> <button>counter is ${escape(data.post.views)}</button> <button>counter2 is ${escape(data2.views)}</button> <a href="/about" data-svelte-h="svelte-pmt1op">about</a>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7f7bd45b.js.map

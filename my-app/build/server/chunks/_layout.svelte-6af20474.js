import { c as create_ssr_component, v as validate_component } from './ssr-563293b8.js';
import './stores2-12b1cc25.js';
import { U as UserCtrlWidget } from './UserCtrlWidget-53169129.js';
import './index-eb362a87.js';

const css = {
  code: "nav.svelte-s580uk{padding:1rem;background:lightskyblue;display:flex;flex-wrap:wrap;justify-content:space-evenly}a.svelte-s580uk{font-size:large;text-decoration:underline;color:inherit}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="center svelte-s580uk">${validate_component(UserCtrlWidget, "UserCtrl").$$render($$result, {}, {}, {})} <a href="/" class="svelte-s580uk" data-svelte-h="svelte-1bzf17w">home</a> <a href="/about" class="svelte-s580uk" data-svelte-h="svelte-pmt1op">about</a> <a href="/blog" class="svelte-s580uk" data-svelte-h="svelte-1cvd4yr">blog</a> <a href="/chart" class="svelte-s580uk" data-svelte-h="svelte-1ypogtf">chart</a> <a href="/browser" class="svelte-s580uk" data-svelte-h="svelte-1dqp4rf">browser</a>  </nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-6af20474.js.map

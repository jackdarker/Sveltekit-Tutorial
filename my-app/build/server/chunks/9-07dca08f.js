import { e as error } from './index2-d7f43214.js';
import { p as posts } from './data2-d90509c9.js';

function load({ params, setHeaders }) {
  const post = posts.find((post2) => post2.slug === params.slug);
  if (!post)
    throw error(404);
  return {
    post
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-7f7bd45b.js')).default;
const server_id = "src/routes/(group0)/blog/[slug]/+page.server.js";
const imports = ["_app/immutable/nodes/9.a38e2271.js","_app/immutable/chunks/scheduler.55267da8.js","_app/immutable/chunks/index.102465cc.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=9-07dca08f.js.map

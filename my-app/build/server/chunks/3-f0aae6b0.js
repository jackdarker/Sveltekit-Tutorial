import { p as posts } from './data2-d90509c9.js';

function load() {
  return {
    summaries: posts.map((post) => ({
      slug: post.slug,
      title: post.title
    }))
  };
}

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./layout.svelte-1f92757f.js')).default;
const server_id = "src/routes/(group0)/blog/+layout.server.js";
const imports = ["_app/immutable/nodes/3.44665fcc.js","_app/immutable/chunks/3.dae4486e.js","_app/immutable/chunks/scheduler.55267da8.js","_app/immutable/chunks/index.102465cc.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=3-f0aae6b0.js.map

import { g as getTagStatistic } from './data-fe4c32b4.js';
import 'better-sqlite3';
import './shared-server-b7e48788.js';
import './index2-d7f43214.js';
import 'path';
import 'fs';

function load({ fetch, params, setHeaders, cookies, url }) {
  return { allTags: getTagStatistic() };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-86510c0e.js')).default;
const server_id = "src/routes/(group0)/chart/+page.server.js";
const imports = ["_app/immutable/nodes/10.2c5174f5.js","_app/immutable/chunks/scheduler.55267da8.js","_app/immutable/chunks/index.102465cc.js","_app/immutable/chunks/each.0e52d141.js","_app/immutable/chunks/Axis.859864aa.js"];
const stylesheets = ["_app/immutable/assets/10.637e3a55.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=10-a83bb348.js.map

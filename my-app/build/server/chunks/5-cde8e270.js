import { e as error } from './index2-d7f43214.js';
import { f as findPost, a as findPostTags, b as fetchData } from './data-fe4c32b4.js';
import 'better-sqlite3';
import './shared-server-b7e48788.js';
import 'path';
import 'fs';

async function load(event) {
  let thumbs = {}, params = event.params || {};
  let search = event.url.searchParams;
  params.page = params.page ?? "1";
  params.listFiles = true;
  params.path = search.get("path") || "";
  params.item = search.get("item") || "";
  params.per_page = search.get("per_page") || "5";
  params.search = search.get("search");
  params.page = parseInt(params.page, 10);
  params.per_page = parseInt(params.per_page, 10);
  thumbs.item = params.item, thumbs.itemId = -1, thumbs.itemTags = [];
  let posts = findPost(params.item);
  if (posts.length > 0) {
    thumbs.itemId = posts[0].id;
    thumbs.itemTags = findPostTags(thumbs.itemId);
  }
  await fetchData(params.path, params).then(function(response) {
    thumbs.path = params.path;
    thumbs.current_page = response.current_page;
    thumbs.from = response.from;
    thumbs.to = response.to;
    thumbs.total = response.total;
    thumbs.per_page = response.per_page;
    thumbs.last_page = response.last_page;
    thumbs.rows = response.data;
  }).catch((error2) => {
    console.error(error2);
  }).finally(() => {
  });
  if (!thumbs)
    throw error(404);
  return {
    thumbs
  };
}

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-f0d3af6f.js')).default;
const server_id = "src/routes/(group1)/browser/[[page]]/+layout.server.js";
const imports = ["_app/immutable/nodes/5.24540d02.js","_app/immutable/chunks/scheduler.55267da8.js","_app/immutable/chunks/index.102465cc.js","_app/immutable/chunks/UserCtrlWidget.47ea984c.js","_app/immutable/chunks/index.9b1262e1.js","_app/immutable/chunks/each.0e52d141.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.13b2bb7f.js","_app/immutable/chunks/navigation.f3b88d50.js","_app/immutable/chunks/webutils.725cb11d.js","_app/immutable/chunks/stores.4c5e9ab2.js"];
const stylesheets = ["_app/immutable/assets/5.2f94920b.css","_app/immutable/assets/UserCtrlWidget.2af05963.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=5-cde8e270.js.map

import './index2-d7f43214.js';
import { f as findPost, e as findTagGroups, a as findPostTags, h as getAllTags, j as createTag, k as deleteTag, l as assignTag } from './data-fe4c32b4.js';
import 'better-sqlite3';
import './shared-server-b7e48788.js';
import 'path';
import 'fs';

function load({ fetch, params, setHeaders, cookies, url }) {
  let search = url.searchParams;
  let item = decodeURIComponent(search.get("item") || "");
  let post = findPost(item);
  let itemID = post.length > 0 ? post[0].id : -1;
  return {
    todos: [],
    item: { id: itemID, name: item },
    tagGroups: findTagGroups(),
    myTags: findPostTags(itemID),
    allTags: getAllTags()
  };
}
const actions = {
  create: async ({ cookies, request, url }) => {
    const data = await request.formData();
    createTag({ name: data.get("id"), newname: data.get("newname"), groupid: data.get("group") });
    return { success: true };
  },
  delete: async ({ cookies, request, url }) => {
    const data = await request.formData();
    deleteTag({ name: data.get("id") });
    return { success: true };
  },
  assign: async ({ cookies, request, url }) => {
    const data = await request.formData();
    assignTag(data.get("postid"), data.get("idlist").split(","));
    return { success: true };
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 12;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-ecf98866.js')).default;
const server_id = "src/routes/(group1)/tagger/+page.server.js";
const imports = ["_app/immutable/nodes/12.0b09ab10.js","_app/immutable/chunks/scheduler.55267da8.js","_app/immutable/chunks/index.102465cc.js","_app/immutable/chunks/each.0e52d141.js","_app/immutable/chunks/UserCtrlWidget.47ea984c.js","_app/immutable/chunks/index.9b1262e1.js","_app/immutable/chunks/stores.4c5e9ab2.js","_app/immutable/chunks/singletons.13b2bb7f.js","_app/immutable/chunks/navigation.f3b88d50.js"];
const stylesheets = ["_app/immutable/assets/12.df848944.css","_app/immutable/assets/UserCtrlWidget.2af05963.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=12-dfce729f.js.map

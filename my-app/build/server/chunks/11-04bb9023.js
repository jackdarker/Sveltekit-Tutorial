import { e as error } from './index2-d7f43214.js';
import { writeFile } from 'fs/promises';
import { I as IMGDIR, c as addPost, i as importDirRecursive, d as createDir } from './data-fe4c32b4.js';
import 'better-sqlite3';
import './shared-server-b7e48788.js';
import 'path';
import 'fs';

const actions = {
  //upload picture and add to database
  upload: async (event) => {
    let { cookies, request, locals } = event;
    const data = await request.formData();
    const dir = decodeURIComponent(data.get("dir"));
    const file = data.get("file");
    try {
      await writeFile(`${IMGDIR}/${dir}/${file.name}`, file.stream());
      addPost({ name: file.name, fileName: `${dir}/${file.name}` });
    } catch (err) {
      throw new error(422, err.message);
    }
    return { success: true };
  },
  //import exisiting Directory of images
  import: async (event) => {
    let { cookies, request, locals } = event;
    const data = await request.formData();
    const dir = decodeURIComponent(data.get("dir"));
    let res;
    ({ recursive: data.get("recursive") || false });
    try {
      res = await importDirRecursive(`${IMGDIR}/${dir}`);
    } catch (err) {
      throw new error(422, err.message);
    }
    return { success: true, message: JSON.stringify(res) };
  },
  //create subdirectory
  createDir: async (event) => {
    let { cookies, request, locals } = event;
    const data = await request.formData();
    const dir = decodeURIComponent(data.get("dir"));
    let res;
    try {
      res = await createDir(`${IMGDIR}/${dir}`);
    } catch (err) {
      throw new error(422, err.message);
    }
    return { success: true, message: JSON.stringify(res) };
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 11;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-d411802f.js')).default;
const server_id = "src/routes/(group1)/browser/[[page]]/+page.server.js";
const imports = ["_app/immutable/nodes/11.64f10788.js","_app/immutable/chunks/scheduler.55267da8.js","_app/immutable/chunks/index.102465cc.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=11-04bb9023.js.map

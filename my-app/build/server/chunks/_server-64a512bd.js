import './index2-d7f43214.js';
import { promises } from 'fs';
import sharp from 'sharp';
import { resolve, relative } from 'path';
import { I as IMGDIR, b as fetchData } from './data-fe4c32b4.js';
import 'better-sqlite3';
import './shared-server-b7e48788.js';

function verifyPath(path) {
  if (path === "") {
    throw new Error("not a directory: " + path);
  }
  const rpath = relative(IMGDIR, path);
  if (rpath.startsWith("..")) {
    throw new Error("invalid directory: " + path);
  }
}
async function GET(request) {
  const urlParams = new URL(request.url).searchParams;
  const op = urlParams.get("op");
  switch (op) {
    case "file": {
      const filename = resolve(IMGDIR, urlParams.get("file"));
      const thumb = urlParams.get("thumb");
      verifyPath(filename);
      const contenttype = getContentTypeForFileType(filename);
      const asset = await promises.readFile(filename);
      let asset2 = asset;
      if (thumb && contenttype != "image/svg+xml") {
        asset2 = await sharp(asset).resize({ width: Math.max(32, Math.min(4e3, thumb)), withoutEnlargement: true }).toBuffer();
      }
      return new Response(asset2, {
        headers: {
          "Content-Type": contenttype
        }
      });
    }
    case "dir": {
      const path = resolve(IMGDIR, urlParams.get("path"));
      verifyPath(path);
      const asset = await fetchData(path, { listDirs: true, listFiles: false, per_page: 9999 });
      let dirs = [];
      for (var i = 0; i < asset.data.length; i++) {
        dirs.push({ id: asset.data[i].fileName, text: asset.data[i].name });
      }
      return Response.json({ dirs });
    }
    default:
      return new Response("", { status: 400, statusText: "invalid request" });
  }
}
function getContentTypeForFileType(filename) {
  let splits = filename.toLowerCase().split(".");
  if (splits.length >= 2) {
    let type = splits[splits.length - 1];
    switch (type) {
      case "jpg":
      case "png":
        return "image/" + type;
      case "jpeg":
        return "image/jpg";
      case "svg":
        return "image/svg+xml";
      case "json":
        return "application/json";
    }
  }
  return "";
}

export { GET };
//# sourceMappingURL=_server-64a512bd.js.map

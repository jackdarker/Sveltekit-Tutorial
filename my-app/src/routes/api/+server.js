import { json } from '@sveltejs/kit';
import {promises as fs} from "fs";
import sharp from 'sharp';
import {resolve as pathresolve,normalize,relative,sep,isAbsolute} from "path";
import {IMGDIR} from '$lib/const.js'
import {fetchData} from '$lib/data.js';
/**
 * verifys that path expands to "public" directory, throws error if not
 * 
 * @param {*} path can be absolute or relative
 */
function verifyPath(path){
  if(path==="") {
    throw new Error('not a directory: '+path);
  }  
  const rpath=relative(IMGDIR,path)
  if(rpath.startsWith("..")) { //need to restrict access to publi dir !
    throw new Error('invalid directory: '+path);
  }
}
/**
 * handles various fetch-request.  
 * @param {*} request 
 * 
 */
export async function GET(request) {
  const urlParams = new URL(request.url).searchParams;  // url =  "/api?op=file&file=xyz.jpg&size=thumb"
  //first searchparam defines what is requested
  const op=urlParams.get("op");
  /*for (const [key, value] of urlParams.entries()) {
    console.log(`${key}, ${value}`);
  }*/
  switch(op){
    case "file": 
    { //file is relative to IMGDIR
      const filename = pathresolve(IMGDIR,(urlParams.get('file')));  //urlparams already decodeURIComponent?!
      const thumb=urlParams.get('thumb'); //
      verifyPath(filename);
      const contenttype = getContentTypeForFileType(filename);
      const asset = await fs.readFile(filename);
      let asset2=asset;
      if(thumb && contenttype!="image/svg+xml") { //TODO thumb contains width only?
        asset2 = await sharp(asset)
        .resize({ width: Math.max(32,Math.min(4000,thumb)), withoutEnlargement:true})  //some size safeguard
        .toBuffer();
      }
      return new Response(asset2, {
        headers: {
          "Content-Type": contenttype
        }
      });}
    case "dir":{
      const path = pathresolve(IMGDIR,(urlParams.get('path')));
      verifyPath(path);
      const asset = await fetchData(path, {listDirs:true,listFiles:false,per_page:9999});
      let dirs=[];
      for(var i=0;i<asset.data.length;i++){
        dirs.push({id:asset.data[i].fileName,text:asset.data[i].name})
      }
      return Response.json({dirs:dirs});
    }
    default:
      return new Response("", { status: 400, statusText: "invalid request" });
    
    //TODO if there is exception thrown, server terminates. It sahould send error tot client instead.
  }
  
}
function getContentTypeForFileType(filename) {
  let splits=filename.toLowerCase().split('.');
  if(splits.length>=2) {
    let type=splits[splits.length-1];
    switch(type)
    { //see https://www.iana.org/assignments/media-types/media-types.xhtml#image
      case "jpg":
      case "png":
      case "gif":
      case "webp":
      case "bmp":
      case "emf":
      case "tiff":
      case "wmf":
        return("image/"+type);
      case "jpeg":
        return("image/jpg");
      case "svg":
        return("image/svg+xml");
      case "json":
        return("application/json"); 
    }
  } 
  return(""); //TODO ?
}
/*export function GET() {
	const number = Math.floor(Math.random() * 6) + 1;
	return json(number);
}*/

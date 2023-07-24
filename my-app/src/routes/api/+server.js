import { json } from '@sveltejs/kit';
import {promises as fs} from "fs";
import {resolve as pathresolve,relative,sep,isAbsolute} from "path";

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
    { //file is relative to app or absolute ("D:\\public\\_pics\\231546.jpg" would work)
      //Todo need to restrict access to publi dir !
      const filename = decodeURIComponent(urlParams.get('file'));
      const contenttype = getContentTypeForFileType(filename);
      const asset = await fs.readFile(filename);
      return new Response(asset, {
        headers: {
          "Content-Type": contenttype
        }
      });}
    default:
      return new Response("", { status: 400, statusText: "invalid request" });
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
        return("image/"+type);
      case "jpeg":
        return("image/jpg");
      case "svg":
        return("image/svg+xml");
      case "json":
        return("application/json"); 
    }
  } 
  return("");
}
/*export function GET() {
	const number = Math.floor(Math.random() * 6) + 1;
	return json(number);
}*/

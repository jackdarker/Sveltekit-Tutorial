/* data-access used by server
*/
import {resolve as pathresolve,relative,sep,isAbsolute} from "path";
import FS from "fs";
import {BASEDIR,IMGDIR} from "$lib/const.js"
//const baseDir = process.cwd()+"\\static\\sub\\"; //base of homepage+subdir
//const imgDir ="./static/art"; //"d:\\public\\_pics"; //where the files are located
//const baseDir = process.cwd();
//const imgDir = pathresolve(baseDir+"\\..\\public\\"); //Todo
//let data = [];


async function processDirectory(abspath,params) {
  const listDirs = params.listDirs || false;
  const listFiles = params.listFiles || false;
  let baseurl;
  baseurl=relative(IMGDIR,abspath);
  baseurl=baseurl.replaceAll("\\","/");//dont use \\ in url
  //console.log(path);
  let data=[];
  // using promise instead of callback-api because easier to make sure files are processed one after another
  let stats = await FS.promises.stat(abspath);
  if(!stats.isDirectory()) {throw new Error('not a directory: '+abspath);}
  let entrys = await FS.promises.readdir(abspath,{withFileTypes:true});
  for(var i=0; i<entrys.length;i++) {
    let isDir=false,entry=entrys[i];
    if(entry.isDirectory())isDir=true;
      //var data = await FS.promises.readFile(resolve(path,files[i]),'utf8');
      //await onFileRead(files[i],data);
      //console.log(files[i]);
      if((isDir && listDirs) || (!isDir && listFiles)) {
        data.push({id:(i+1),name:entry.name,url:baseurl+entry.name,isDir:isDir});
      }
  } 
  return(data);
}
export function fetchData(path,params) {
  params.listDirs = params.listDirs || false, params.listFiles=params.listFiles?true:false;
  const page = params.page || 1;
  const per_page = params.per_page || 5;
  const fullpath = isAbsolute(path)?path:pathresolve(IMGDIR,path);
  let total,from,to,last_page;
  let slice=[];

  return new Promise((resolve, reject) => {
    processDirectory(fullpath,params).then(
      (data)=>{  total = data.length;
        last_page = Math.ceil(total / per_page);
        from = (page - 1) * per_page;
        to = page * per_page;
        slice = data.slice(from, to);
        //console.log(slice.length);
        resolve({
          'total': total,
          'per_page': per_page,
          'current_page': page,
          'last_page': last_page,
          'from': from,
          'to': to,
          'data': slice
        });
      })
  });
}
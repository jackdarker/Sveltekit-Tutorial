
import {resolve as pathresolve,relative,sep,isAbsolute} from "path";
import FS from "fs";
//const baseDir = process.cwd()+"\\static\\sub\\"; //base of homepage+subdir
//const imgDir ="./static/art"; //"d:\\public\\_pics"; //where the files are located
const baseDir = process.cwd();
const imgDir = pathresolve(baseDir+"\\..\\public\\");;
let data = [];
const moods = [
  0x1F60D, // 😍
  0x1F60A, // 😊
  0x1F603, // 😃
  0x1F60F, // 😏
  0x1F620, // 😠
  0x1F632, // 😲
  0x1F615, // 😕
  0x1F622 // 😢 
];

async function processDirectory(path) {
  let baseurl,abspath=isAbsolute(path)?path:pathresolve(path);
  baseurl=relative(baseDir,abspath)+sep;
  baseurl=baseurl.replaceAll("\\","/");//dont use \\ in url
  //console.log(path);
  data=[];
  // using promise instead of callback-api because easier to make sure files are processed one after another
  let stats = await FS.promises.stat(abspath);
  if(!stats.isDirectory()) {throw new Error('not a directory: '+abspath);}
  let files = await FS.promises.readdir(abspath);
  for(var i=0; i<files.length;i++) {
      //var data = await FS.promises.readFile(resolve(path,files[i]),'utf8');
      //await onFileRead(files[i],data);
      //console.log(files[i]);
      data.push({id:(i+1),name:files[i],url:baseurl+files[i]});
  } 
}

export default (path, params = {}) => {

  //processDirectory("D:"+sep+"Downloads"+sep+"_battlers"+sep+"animals")
  //(async()=>{await processDirectory(resolve(baseDir+sep+"static"+sep+"art"))})();
  const page = params.page || 1;
  const per_page = params.per_page || 5;
  let total,from,to,last_page;
  let slice=[];

  return new Promise((resolve, reject) => {
    //baseDir+sep+"static"+sep+"art" "./static/art"
    processDirectory(imgDir).then(
      ()=>{  total = data.length;
        last_page = Math.ceil(total / per_page);
        from = (page - 1) * per_page;
        to = page * per_page;
        slice = data.slice(from, to);
        console.log(slice.length);
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
    console.log(data.length); 
    /*setTimeout(function () {
      console.log(slice.length); 
      resolve({
        'total': total,
        'per_page': per_page,
        'current_page': page,
        'last_page': last_page,
        'from': from,
        'to': to,
        'data': slice
      });
    }, 10);*/
  });
};
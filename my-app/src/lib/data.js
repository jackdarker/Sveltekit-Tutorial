/* data-access used by server
*/
import {dbHandler} from "$lib/dbHandler.js";
import {resolve as pathresolve,relative,sep,isAbsolute} from "path";
import FS from "fs";
import {IMGDIR} from "$lib/const.js"
import { Db2Database } from "carbon-icons-svelte";
//const baseDir = process.cwd();
//const imgDir = pathresolve(baseDir+"\\..\\public\\"); //Todo

/**
 * walks a directory tree and returns a list of dirs/files depending on listDirs/listFiles
 *
 * @param {*} abspath
 * @param {*} params
 * @return {*} 
 */
async function processDirectory(abspath,params) {
  const listDirs = params.listDirs || false;
  const listFiles = params.listFiles || false;
  let baseurl;
  baseurl=relative(IMGDIR,abspath);
  baseurl=(baseurl.length===0)?baseurl:baseurl+sep; // public/thumbs/
  baseurl=baseurl.replaceAll("\\","/");//dont use \\ in url
  //console.log(path);
  let data=[];
  // using promise instead of callback-api because easier to make sure files are processed one after another
  let stats = await FS.promises.stat(abspath);
  if(!stats.isDirectory()) {throw new Error('not a directory: '+abspath);}
  let entrys = await FS.promises.readdir(abspath,{withFileTypes:true});
  entrys.sort((a,b)=>{let _a=a.name.toLowerCase(), _b=b.name.toLowerCase(); return((_a>_b)?1:(_a<_b)?-1:0)}); //sort alphabet.
  for(var i=0; i<entrys.length;i++) {
    let isDir=false,entry=entrys[i];
    if(entry.isDirectory())isDir=true;
      //var data = await FS.promises.readFile(resolve(path,files[i]),'utf8');
      //await onFileRead(files[i],data);
      //console.log(files[i]);
      if((isDir && listDirs) || (!isDir && listFiles)) {
        data.push({id:(i+1),name:entry.name,fileName:baseurl+entry.name,isDir:isDir});
      }
  } 
  return(data);
}
/**
 *
 *
 * @export
 * @param {*} path relative to IMGDIR
 * @param {*} params
 * @return {*} 
 */
export function fetchData(path,params) {
  params.listDirs = params.listDirs || false, params.listFiles=params.listFiles?true:false;
  const page = params.page || 1;
  const per_page = params.per_page || 5;
  const fullpath = isAbsolute(path)?path:pathresolve(IMGDIR,path);
  let total,from,to,last_page;
  let slice=[];
  //if there is no search, display directory
  if(!params.search) {
    return new Promise((resolve, reject) => {
      processDirectory(fullpath,params).then(
        (data)=>{  total = data.length;
          last_page = Math.ceil(total / per_page);
          from = (page - 1) * per_page;
          to = page * per_page;
          slice = data.slice(from, to);
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
  } else {
    return new Promise((resolve, reject) => {
      let data = db.findPostByTag(params.search);
      total = data.length;
      last_page = Math.ceil(total / per_page);
      from = (page - 1) * per_page;
      to = page * per_page;
      slice = data.slice(from, to);
      resolve({
        'total': total,
        'per_page': per_page,
        'current_page': page,
        'last_page': last_page,
        'from': from,
        'to': to,
        'data': slice
      });
    });
  }
}
/*------------------------------------------------*/
/**
 * imports all images from a directory into database
 *
 * @export
 * @param {*} path
 */
export function importDir(path){
  const params={};
  params.listDirs= false, params.listFiles=true;
  const fullpath = isAbsolute(path)?path:pathresolve(IMGDIR,path);
  let total=0;
  return new Promise((resolve, reject) => {
    processDirectory(fullpath,params).then(
      (data)=>{  
        for(var i = data.length-1;i>=0;i--) {
          let post = {name:data[i].name, fileName:data[i].fileName};
          console.log(JSON.stringify(post));
          //db.createPost(post);
        }
        total = data.length;
        resolve({
          'total': total
        });
      })
  });
}

export function importDirRecursive(path){
  const recursive=true;
  let pathstack = [path];
  let total=0;
  function foo(){
    return new Promise((resolve, reject) => {
      let _path = pathstack.shift();
      _path = isAbsolute(_path)?_path:pathresolve(IMGDIR,_path);
      //get files from dir and process
      processDirectory(_path,{listDirs: false, listFiles: true}).then(
        (data)=>{  
          for(var i = data.length-1;i>=0;i--) {
            let post = {name:data[i].name, fileName:data[i].fileName};
            //console.log(JSON.stringify(post));
            db.createPost(post);
          }
          total += data.length;
        }).then(()=>{
          //get dirs in dir and push to stack
          processDirectory(_path,{listDirs: true, listFiles: false}).then(
            (data)=>{  
              for(var i = data.length-1;i>=0;i--) {
                //console.log(data[i].fileName);
                pathstack.push(data[i].fileName)
              }
            }).then(()=>{
              //return if nothing more to process
              if(pathstack.length<=0) resolve({'total': total});
              else foo().then(()=>{resolve({'total': total})});
            });        
          })
        });
  }
  return(foo());
}



/*------------------------------------------------*/
const db = new dbHandler();
db.dbInit();
export function getAllTags() {
	return(db.findTags());//[{id:"red"},{id:"green"},{id:"blue"}]
}
export function findTagGroups() {
	return(db.findTagGroups());
}
export function findPostTags(postId) {
	return(db.findPostTags(postId));
}
export function findPost(search) {
	return(db.findPost(search));
}
export function findPostByTag(search) {
  return(db.findPostByTag(search));
}
export function addPost(post){
  db.createPost(post);
  //let i = allTags.findIndex((e)=>{return(e.id===tag)});
  //if(i<0) allTags.push({id:tag});
}
export function createTag(tag){
  db.createTag(tag);
  //let i = allTags.findIndex((e)=>{return(e.id===tag)});
  //if(i<0) allTags.push({id:tag});
}
export function deleteTag(tag){
  db.deleteTag(tag);
}
export function assignTag(postid,idlist){
    db.assignTagToPost(postid,idlist);
}

/*++++++++++++++++++++++++++++++++++++++++++++++*/
// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.
// TODO REMOVE this->
const db2 = new Map();

export function getTodos(userid) {
	if (!db2.get(userid)) {
		db2.set(userid, [{
			id: crypto.randomUUID(),
			description: 'Learn SvelteKit',
			done: false
		}]);
	}

	return db2.get(userid);
}

export function createTodo(userid, description) {
	const todos = db2.get(userid);

	todos.push({
		id: crypto.randomUUID(),
		description,
		done: false
	});
}

export function deleteTodo(userid, todoid) {
	const todos = db2.get(userid);
	const index = todos.findIndex((todo) => todo.id === todoid);

	if (index !== -1) {
		todos.splice(index, 1);
	}
}

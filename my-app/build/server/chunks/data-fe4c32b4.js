import Database from 'better-sqlite3';
import { b as private_env } from './shared-server-b7e48788.js';
import './index2-d7f43214.js';
import { isAbsolute, resolve, relative, sep } from 'path';
import FS from 'fs';

const IMGDIR = private_env.IMGDIR;
const DATABASE = private_env.DATABASE;
console.log("opening " + DATABASE);
const db$1 = new Database(DATABASE);
db$1.pragma("journal_mode = WAL");
class dbHandler {
  dbInit() {
    let query = `CREATE TABLE IF NOT EXISTS Posts (
			postID INTEGER PRIMARY KEY AUTOINCREMENT, 
			boardID INTEGER NOT NULL,
			replyToID INTEGER,
			name TEXT NOT NULL,
			subject TEXT,
			dateTime TEXT,
			postText TEXT,
			fileName TEXT,
			posterID TEXT NOT NULL,
			fileExt TEXT
		)`;
    db$1.exec(query);
    query = `CREATE TABLE IF NOT EXISTS Boards (
			boardID INTEGER PRIMARY KEY AUTOINCREMENT, 
			boardName TEXT NOT NULL
		)`;
    db$1.exec(query);
    query = `CREATE TABLE IF NOT EXISTS PostTags (
			postID  INTEGER NOT NULL, 
			tagID  INTEGER NOT NULL, 
			PRIMARY KEY (postID,tagID) ON CONFLICT IGNORE
		)`;
    db$1.exec(query);
    query = `CREATE TABLE IF NOT EXISTS Tags (
			ID	INTEGER PRIMARY KEY AUTOINCREMENT,
			GroupID	INTEGER,
			Name	TEXT			
		)`;
    db$1.exec(query);
    query = `CREATE TABLE IF NOT EXISTS TagGroups (
			ID	INTEGER PRIMARY KEY AUTOINCREMENT,
			Name	TEXT,
			Color	TEXT			
		)`;
    db$1.exec(query);
    this.createTagGroup({ name: "aqua", color: "aqua" });
    this.createTagGroup({ name: "gray", color: "gray" });
    this.createTagGroup({ name: "red", color: "red" });
    this.createTagGroup({ name: "blue", color: "blue" });
    this.createTagGroup({ name: "green", color: "green" });
  }
  createTagGroup(group) {
    const stmt = db$1.prepare("Update TagGroups SET name=?,Color=? where (name=?)");
    let info = stmt.run(group.name, group.color, group.name);
    let rowID = -1;
    if (info.changes <= 0) {
      const stmt2 = db$1.prepare("Insert Into TagGroups (name,Color) VALUES(?,?)");
      const info2 = stmt2.run(group.name, group.color);
      rowID = info2.changes <= 0 ? -1 : info2.lastInsertRowid;
    }
    return rowID;
  }
  findTagGroups() {
    let results = [];
    const stmt = db$1.prepare("SELECT ID,Name,Color FROM TagGroups");
    const rows = stmt.all();
    rows.forEach((row) => {
      results.push({ id: row.ID, name: row.Name, color: row.Color });
    });
    return results;
  }
  createTag(tag) {
    tag.groupid = tag.groupid || 1;
    tag.newname = tag.newname || tag.name;
    const stmt = db$1.prepare("Update Tags SET name=?, groupID=? where (name=?)");
    let info = stmt.run(tag.newname, tag.groupid, tag.name);
    let rowID = -1;
    if (info.changes <= 0) {
      const stmt2 = db$1.prepare("Insert Into Tags (name,GroupID) VALUES(?,?)");
      const info2 = stmt2.run(tag.newname, tag.groupid);
      rowID = info2.changes <= 0 ? -1 : info2.lastInsertRowid;
    }
    return rowID;
  }
  deleteTag(tag) {
    const stmt = db$1.prepare("Delete from Tags where (name=?)");
    stmt.run(tag.name);
  }
  /**
   * find tags by search-term
   *
   * @param {*} search
   * @return {*} 
   * @memberof dbHandler
   */
  findTags(search) {
    let results = [];
    const stmt = db$1.prepare("SELECT Tags.ID,Tags.Name, TagGroups.ID as GroupID, TagGroups.Color FROM Tags left join TagGroups on Tags.GroupID=TagGroups.ID");
    const rows = stmt.all();
    rows.forEach((row) => {
      results.push({ id: row.ID, name: row.Name, groupid: row.GroupID, color: row.Color });
    });
    return results;
  }
  findPostTags(postId) {
    let results = [];
    const stmt = db$1.prepare("SELECT Tags.ID,Tags.Name, TagGroups.ID as GroupID, TagGroups.Color FROM Tags inner join PostTags on Tags.ID=PostTags.tagId left join TagGroups on Tags.GroupID=TagGroups.ID WHERE PostTags.postID=? ");
    const rows = stmt.all(postId);
    rows.forEach((row) => {
      results.push({ id: row.ID, name: row.Name, groupid: row.GroupID, color: row.Color });
    });
    return results;
  }
  getTagStatistic() {
    let results = [];
    const stmt = db$1.prepare("SELECT Tags.ID,max(Tags.Name) as name,count(Tags.ID) as count,max(TagGroups.Color) as color FROM Tags inner join PostTags on Tags.ID=PostTags.tagId left join TagGroups on Tags.GroupID=TagGroups.ID Group by (Tags.ID) order by count desc ");
    const rows = stmt.all();
    rows.forEach((row) => {
      results.push({ id: row.ID, name: row.name, count: row.count, color: row.color });
    });
    return results;
  }
  createPost(post) {
    post.userId = "unknown";
    post.boardID = 0;
    let rowID = -1;
    const stmt = db$1.prepare("Update Posts Set boardId=?,posterID=?, fileName=?, name=? where (name=?)");
    let info = stmt.run(post.boardID, post.userId, post.fileName, post.name, post.name);
    if (info.changes <= 0) {
      const stmt2 = db$1.prepare("Insert Into Posts (boardID,posterId,fileName,name) VALUES(?,?,?,?)");
      info = stmt2.run(post.boardID, post.userId, post.fileName, post.name);
      rowID = info.changes <= 0 ? -1 : info.lastInsertRowid;
    }
    return rowID;
  }
  getPost(postID) {
    let results = [];
    const stmt = db$1.prepare("SELECT boardID,postID,name,fileName FROM Posts Where postID=?");
    const rows = stmt.all(postID);
    rows.forEach((row) => {
      results.push({ id: row.postID, fileName: row.fileName, name: row.name });
    });
    return results;
  }
  /**
   *	
   * @param {*} search: relative path+name
   * @return {*} 
   * @memberof dbHandler
   */
  findPost(search) {
    let results = [];
    const stmt = db$1.prepare("SELECT boardID,postID,name,fileName FROM Posts Where fileName=?");
    const rows = stmt.all(search);
    rows.forEach((row) => {
      results.push({ id: row.postID, fileName: row.fileName, name: row.name });
    });
    return results;
  }
  /**
   * Note: the search term has to match exactly
   *
   * @param {*} search: is either an array or a commaseparated string containing tags
   * @return {*} 
   * @memberof dbHandler
   */
  findPostByTag(search) {
    let results = [];
    const stmt = db$1.prepare("select distinct Posts.postID from Posts inner join PostTags on Posts.postID=PostTags.postID inner join Tags on Tags.ID=PostTags.tagID where Tags.name IN(?)");
    const rows = stmt.all(search);
    rows.forEach((row) => {
      results = [...results, ...this.getPost(row.postID)];
    });
    return results;
  }
  /**
   * assign tags to post and remove others
   *
   * @param {*} postid
   * @param {*} tagids
   * @memberof dbHandler
   */
  assignTagToPost(postid, tagids) {
    let x = tagids.join(",");
    const stmt1 = db$1.prepare("Delete From PostTags  Where postID=? AND tagId NOT IN(?)");
    stmt1.run(postid, x);
    const stmt2 = db$1.prepare("Insert Into PostTags (postID,tagId) VALUES(?,?)");
    for (var i = tagids.length - 1; i >= 0; i--) {
      stmt2.run(postid, tagids[i]);
    }
  }
}
async function processDirectory(abspath, params) {
  const listDirs = params.listDirs || false;
  const listFiles = params.listFiles || false;
  let baseurl;
  baseurl = relative(IMGDIR, abspath);
  baseurl = baseurl.length === 0 ? baseurl : baseurl + sep;
  baseurl = baseurl.replaceAll("\\", "/");
  let data = [];
  let stats = await FS.promises.stat(abspath);
  if (!stats.isDirectory()) {
    throw new Error("not a directory: " + abspath);
  }
  let entrys = await FS.promises.readdir(abspath, { withFileTypes: true });
  entrys.sort((a, b) => {
    let _a = a.name.toLowerCase(), _b = b.name.toLowerCase();
    return _a > _b ? 1 : _a < _b ? -1 : 0;
  });
  for (var i = 0; i < entrys.length; i++) {
    let isDir = false, entry = entrys[i];
    if (entry.isDirectory())
      isDir = true;
    if (isDir && listDirs || !isDir && listFiles) {
      data.push({ id: i + 1, name: entry.name, fileName: baseurl + entry.name, isDir });
    }
  }
  return data;
}
function fetchData(path, params) {
  params.listDirs = params.listDirs || false, params.listFiles = params.listFiles ? true : false;
  const page = params.page || 1;
  const per_page = params.per_page || 5;
  const fullpath = isAbsolute(path) ? path : resolve(IMGDIR, path);
  let total, from, to, last_page;
  let slice = [];
  if (!params.search) {
    return new Promise((resolve2, reject) => {
      processDirectory(fullpath, params).then(
        (data) => {
          total = data.length;
          last_page = Math.ceil(total / per_page);
          from = (page - 1) * per_page;
          to = page * per_page;
          slice = data.slice(from, to);
          resolve2({
            "total": total,
            "per_page": per_page,
            "current_page": page,
            "last_page": last_page,
            "from": from,
            "to": to,
            "data": slice
          });
        }
      );
    });
  } else {
    return new Promise((resolve2, reject) => {
      let data = db.findPostByTag(params.search);
      total = data.length;
      last_page = Math.ceil(total / per_page);
      from = (page - 1) * per_page;
      to = page * per_page;
      slice = data.slice(from, to);
      resolve2({
        "total": total,
        "per_page": per_page,
        "current_page": page,
        "last_page": last_page,
        "from": from,
        "to": to,
        "data": slice
      });
    });
  }
}
function importDirRecursive(path) {
  let pathstack = [path];
  let total = 0;
  function foo() {
    return new Promise((resolve$1, reject) => {
      let _path = pathstack.shift();
      _path = isAbsolute(_path) ? _path : resolve(IMGDIR, _path);
      processDirectory(_path, { listDirs: false, listFiles: true }).then(
        (data) => {
          for (var i = data.length - 1; i >= 0; i--) {
            let post = { name: data[i].name, fileName: data[i].fileName };
            db.createPost(post);
          }
          total += data.length;
        }
      ).then(() => {
        processDirectory(_path, { listDirs: true, listFiles: false }).then(
          (data) => {
            for (var i = data.length - 1; i >= 0; i--) {
              pathstack.push(data[i].fileName);
            }
          }
        ).then(() => {
          if (pathstack.length <= 0)
            resolve$1({ "total": total });
          else
            foo().then(() => {
              resolve$1({ "total": total });
            });
        });
      });
    });
  }
  return foo();
}
function createDir(path) {
  function foo() {
    let _path = path;
    _path = isAbsolute(_path) ? _path : resolve(IMGDIR, _path);
    let dirCreation = FS.mkdir(_path, { recursive: true }, (err) => {
      if (err)
        throw err;
    });
    return dirCreation;
  }
  return foo();
}
const db = new dbHandler();
db.dbInit();
function getAllTags() {
  return db.findTags();
}
function findTagGroups() {
  return db.findTagGroups();
}
function findPostTags(postId) {
  return db.findPostTags(postId);
}
function getTagStatistic() {
  return db.getTagStatistic();
}
function findPost(search) {
  return db.findPost(search);
}
function addPost(post) {
  db.createPost(post);
}
function createTag(tag) {
  db.createTag(tag);
}
function deleteTag(tag) {
  db.deleteTag(tag);
}
function assignTag(postid, idlist) {
  db.assignTagToPost(postid, idlist);
}

export { IMGDIR as I, findPostTags as a, fetchData as b, addPost as c, createDir as d, findTagGroups as e, findPost as f, getTagStatistic as g, getAllTags as h, importDirRecursive as i, createTag as j, deleteTag as k, assignTag as l };
//# sourceMappingURL=data-fe4c32b4.js.map

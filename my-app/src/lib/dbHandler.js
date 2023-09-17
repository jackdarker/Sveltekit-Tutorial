//const sqlite3 = require('sqlite3').verbose();
import Database from 'better-sqlite3';
import {IMGDIR, DATABASE} from "$lib/const.js"
import { redirect } from '@sveltejs/kit';
class Tag{
	constructor(tagID,tagName){
		this.ID=tagID,this.Name=tagName;
	}
}
//console.log(process.env)
console.log("opening "+DATABASE);  //TODO switch db between production & dev
const db =new Database(DATABASE);
db.pragma('journal_mode = WAL')
/*let db = new sqlite3.Database('./rinChan.db', (err) => {
	if (err){
		console.log("dbHandler::error "+err);
	} else {
		console.log("dbHandler::dbConnected");
	}
});*/
export class dbHandler {
	dbInit(){
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
		)`
		db.exec(query);
		query = `CREATE TABLE IF NOT EXISTS Boards (
			boardID INTEGER PRIMARY KEY AUTOINCREMENT, 
			boardName TEXT NOT NULL
		)`
		db.exec(query);
		query = `CREATE TABLE IF NOT EXISTS PostTags (
			postID  INTEGER NOT NULL, 
			tagID  INTEGER NOT NULL, 
			PRIMARY KEY (postID,tagID) ON CONFLICT IGNORE
		)`
		db.exec(query);
		query = `CREATE TABLE IF NOT EXISTS Tags (
			ID	INTEGER PRIMARY KEY AUTOINCREMENT,
			GroupID	INTEGER,
			Name	TEXT			
		)`
		db.exec(query);
		query = `CREATE TABLE IF NOT EXISTS TagGroups (
			ID	INTEGER PRIMARY KEY AUTOINCREMENT,
			Name	TEXT,
			Color	TEXT			
		)`
		db.exec(query);
		this.createTagGroup({name:"gray",color:"gray"});
		this.createTagGroup({name:"red",color:"red"});
		this.createTagGroup({name:"blue",color:"blue"});
		this.createTagGroup({name:"green",color:"green"});
		//this.createTag({Name:'brown'});
		//query = `INSERT into Boards (boardID,boardName) VALUES ('b','Random')`
		//db.run(query);
		//query = `INSERT into Boards (boardID,boardName) VALUES ('g','Technology')`
		//db.run(query);
		//query = `INSERT into Boards (boardID,boardName) VALUES ('a','Anime/Manga')`
		//db.run(query);
	}
	createTagGroup(group){
		const stmt = db.prepare('Update TagGroups SET name=?,Color=? where (name=?)');
		let info = stmt.run(group.name,group.color,group.name);
		let rowID=-1;
		if(info.changes<=0) {
			const stmt2 = db.prepare('Insert Into TagGroups (name,Color) VALUES(?,?)');
			const info = stmt2.run(group.name,group.color);
			rowID = (info.changes<=0)?-1:info.lastInsertRowid;
		} 
		return(rowID);
	}	
	findTagGroups(){
		let results = [];
		const stmt = db.prepare('SELECT ID,Name,Color FROM TagGroups');
		const rows = stmt.all();
		rows.forEach((row)=>{				
			//results.push(new Tag(row.ID,row.Name));   classes not compatible with devalue?
			results.push({ id:row.ID, name: row.Name, color: row.Color});
		});
		return(results);
	}
	createTag(tag){
		tag.groupid = tag.groupid ||1;
		const stmt = db.prepare('Update Tags SET name=?, groupID=? where (name=?)');
		let info = stmt.run(tag.name,tag.groupid,tag.name);
		let rowID=-1;
		if(info.changes<=0) {
			const stmt2 = db.prepare('Insert Into Tags (name,GroupID) VALUES(?,?)');
			const info = stmt2.run(tag.name,tag.groupid);
			rowID = (info.changes<=0)?-1:info.lastInsertRowid;
		} 
		//db.exec('Update tags Set name="'+tag.name+'" Where name="'+tag.name+'";Insert into tags (name) Select "'+tag.name+'" Where (Select Changes()=0);');  this should work but we dont get rowID
		return(rowID);
	}
	deleteTag(tag){
		//#todo only delete if no one uses it, maybe mark for deletion and hide ?
		const stmt = db.prepare('Delete from Tags where (name=?)');
		const info = stmt.run(tag.name);
	}
	/**
	 * find tags by search-term
	 *
	 * @param {*} search
	 * @return {*} 
	 * @memberof dbHandler
	 */
	findTags(search){
		let results = [];
		const stmt = db.prepare('SELECT Tags.ID,Tags.Name, TagGroups.ID as GroupID, TagGroups.Color FROM Tags left join TagGroups on Tags.GroupID=TagGroups.ID');
		const rows = stmt.all();
		rows.forEach((row)=>{				
			//results.push(new Tag(row.ID,row.Name));   classes not compatible with devalue?
			results.push({ id:row.ID, name: row.Name, groupid:row.GroupID, color:row.Color});
		});
		return(results);
	}
	findPostTags(postId){
		let results = [];
		const stmt = db.prepare('SELECT Tags.ID,Tags.Name, TagGroups.ID as GroupID, TagGroups.Color FROM Tags '+ 
			'inner join PostTags on Tags.ID=PostTags.tagId '+
			'left join TagGroups on Tags.GroupID=TagGroups.ID '+
			'WHERE PostTags.postID=? ');
		const rows = stmt.all(postId);
		rows.forEach((row)=>{				
			//results.push(new Tag(row.ID,row.Name));   classes not compatible with devalue?
			results.push({ id:row.ID, name: row.Name, groupid:row.GroupID, color:row.Color});
		});
		return(results);
	}
	createPost(post){
		post.userId="unknown";post.boardID=0;
		let rowID=-1;
		const stmt = db.prepare('Update Posts Set boardId=?,posterID=?, fileName=?, name=? where (name=?)');
		let info = stmt.run(post.boardID,post.userId,post.fileName, post.name,post.name);
		if(info.changes<=0) {
			const stmt2 = db.prepare('Insert Into Posts (boardID,posterId,fileName,name) VALUES(?,?,?,?)');
			info = stmt2.run(post.boardID, post.userId, post.fileName, post.name);
			rowID = (info.changes<=0)?-1:info.lastInsertRowid;
		} 
		return(rowID);
	}
	getPost(postID){
		let results = [];
		const stmt = db.prepare('SELECT boardID,postID,name,fileName FROM Posts Where postID=?');
		const rows = stmt.all(postID);
		rows.forEach((row)=>{
			results.push({ id: row.postID, fileName:row.fileName, name:row.name});
		});
		return(results);
	}
	/**
	 *	
	 * @param {*} search: relative path+name
	 * @return {*} 
	 * @memberof dbHandler
	 */
	findPost(search){
		let results = [];
		const stmt = db.prepare('SELECT boardID,postID,name,fileName FROM Posts Where fileName=?');
		const rows = stmt.all(search);
		rows.forEach((row)=>{				
			//results.push(new Tag(row.ID,row.Name));   classes not compatible with devalue?
			results.push({ id: row.postID, fileName:row.fileName, name:row.name});
		});
		return(results);
	}
	/**
	 * Note: the search term has to match exactly
	 *
	 * @param {*} search: is either an array or a commaseparated string containing tags
	 * @return {*} 
	 * @memberof dbHandler
	 */
	findPostByTag(search){
		let results = [];
		const stmt = db.prepare('select distinct Posts.postID from Posts inner join PostTags on Posts.postID=PostTags.postID inner join Tags on Tags.ID=PostTags.tagID where Tags.name IN(?)');
		/*select distinct Posts.postID from Posts inner join PostTags on Posts.postID=PostTags.postID inner join Tags on Tags.ID=PostTags.tagID where Tags.name Like("%now%") */   //IN("now","snow")
		const rows = stmt.all(search);
		rows.forEach((row)=>{				
			//results.push(new Tag(row.ID,row.Name));   classes not compatible with devalue?
			results=[...results,...this.getPost(row.postID)];
		});
		return(results);
	}
	/**
	 * assign tags to post and remove others
	 *
	 * @param {*} postid
	 * @param {*} tagids
	 * @memberof dbHandler
	 */
	assignTagToPost(postid,tagids){
		let info, x = tagids.join(',');
		const stmt1 = db.prepare('Delete From PostTags  Where postID=? AND tagId NOT IN(?)');
		info = stmt1.run(postid,x);

		const stmt2 = db.prepare('Insert Into PostTags (postID,tagId) VALUES(?,?)');
		for(var i=tagids.length-1;i>=0;i--) {
			info = stmt2.run(postid, tagids[i]); //will skip on conflict
		}
	}
}

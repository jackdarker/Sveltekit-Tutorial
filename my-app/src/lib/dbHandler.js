//const sqlite3 = require('sqlite3').verbose();
import Database from 'better-sqlite3';
class Tag{
	constructor(tagID,tagName){
		this.ID=tagID,this.Name=tagName;
	}
}

const db = new Database('foobar.db');
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
		//this.createTag({Name:'brown'});
		//query = `INSERT into Boards (boardID,boardName) VALUES ('b','Random')`
		//db.run(query);
		//query = `INSERT into Boards (boardID,boardName) VALUES ('g','Technology')`
		//db.run(query);
		//query = `INSERT into Boards (boardID,boardName) VALUES ('a','Anime/Manga')`
		//db.run(query);
	}	
	createTag(tag){
		const stmt = db.prepare('Update Tags SET name=? where (name=?)');
		let info = stmt.run(tag.name,tag.name);
		let rowID=-1;
		if(info.changes<=0) {
			const stmt2 = db.prepare('Insert Into Tags (name,GroupID) VALUES(?,0)');
			const info = stmt2.run(tag.name);
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
		const stmt = db.prepare('SELECT ID,Name FROM Tags');
		const rows = stmt.all();
		rows.forEach((row)=>{				
			//results.push(new Tag(row.ID,row.Name));   classes not compatible with devalue?
			results.push({ id:row.ID, name: row.Name});
		});
		return(results);
	}
	findPostTags(postId){
		let results = [];
		const stmt = db.prepare('SELECT Tags.ID,Tags.Name FROM Tags inner join PostTags on Tags.ID=PostTags.tagId WHERE PostTags.postID=?');
		const rows = stmt.all(postId);
		rows.forEach((row)=>{				
			//results.push(new Tag(row.ID,row.Name));   classes not compatible with devalue?
			results.push({ id:row.ID, name: row.Name});
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
	assignTagToPost(postid,tagid){
		let info ;
		const stmt2 = db.prepare('Insert Into PostTags (postID,tagId) VALUES(?,?)');
		info = stmt2.run(postid, tagid); //will skip on conflict
	}
	unassignTagToPost(postid,tag){
		let info ;
		const stmt2 = db.prepare('Delete From PostTags  Where postID=? AND tagId=?');
		info = stmt2.run(post.ID, tag.ID);
	}
}

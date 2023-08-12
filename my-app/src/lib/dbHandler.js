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
		console.log("dbHandler::dbInit::createPosts");
		let query = `CREATE TABLE IF NOT EXISTS Posts (
			postID INTEGER PRIMARY KEY AUTOINCREMENT, 
			boardID TEXT NOT NULL,
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
		console.log("dbHandler::dbInit::createBoards");
		query = `CREATE TABLE IF NOT EXISTS Boards (
			boardID TEXT NOT NULL PRIMARY KEY, 
			boardName TEXT NOT NULL
		)`
		db.exec(query);
		query = `CREATE TABLE IF NOT EXISTS Tags (
			ID	INTEGER NOT NULL UNIQUE,
			Name	TEXT,
			PRIMARY KEY("ID" AUTOINCREMENT)
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
		const info = stmt.run(tag.Name,tag.Name);
		let rowID=-1;
		if(info.changes<=0) {
			const stmt2 = db.prepare('Insert Into Tags (name) VALUES(?)');
			const info2 = stmt.run(tag.Name);
			rowID = (info.changes<=0)?-1:info.lastInsertRowid;
		} 
		//db.exec('Update tags Set name="'+tag.name+'" Where name="'+tag.name+'";Insert into tags (name) Select "'+tag.name+'" Where (Select Changes()=0);');  this should work but we dont get rowID
		return(rowID);
	}
	deleteTag(tag){
		//#todo only delete if no one uses it, maybe mark for deletion and hide ?
		const stmt = db.prepare('Delete from Tags where (name=?)');
		const info = stmt.run(tag.Name);
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
			results.push({ id: row.Name});
		});
		return(results);
	}
}

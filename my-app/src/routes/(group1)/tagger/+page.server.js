import {redirect} from '@sveltejs/kit'
import * as db from '$lib/data.js';

export function load({ fetch,params,setHeaders,cookies,url }) {
	/*const id = cookies.get('userid');
	if (!id) {
		cookies.set('userid', crypto.randomUUID(), { path: '/' });
	}
	return {
		todos: db.getTodos(id) ?? []
	};*/
	let search = url.searchParams;
	let item= decodeURIComponent(search.get('item')||"");
	let post= db.findPost(item);
	let itemID = (post.length>0)?post[0].id : -1;
    return({todos:[],item:{id:itemID,name:item},
		myTags:db.findPostTags(itemID),
        allTags:db.getAllTags()});
}

export const actions = {
	create: async ({ cookies, request,url }) => {
		const data = await request.formData();
		db.createTag({name:data.get('id')});
		return { success: true };
	},
    delete: async ({ cookies, request,url }) => {
		const data = await request.formData();
		db.deleteTag( {name:data.get('id')});
		return { success: true };
	},
    assign: async ({ cookies, request,url }) => {
		const data = await request.formData();
        db.assignTag(data.get('postid'),data.get('idlist').split(','));
		//throw redirect(303,url.searchParams.get('redirect')||'/');
		return { success: true };
	}
};
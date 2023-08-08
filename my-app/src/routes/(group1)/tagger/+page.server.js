import * as db from '$lib/data.js';

export function load({ cookies }) {
	/*const id = cookies.get('userid');

	if (!id) {
		cookies.set('userid', crypto.randomUUID(), { path: '/' });
	}

	return {
		todos: db.getTodos(id) ?? []
	};*/
    return({todos:[],myTags:db.getMyTags(),
        allTags:db.getAllTags()});
}

export const actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();
		db.createTag(data.get('id'));
	},
    delete: async ({ cookies, request }) => {
		const data = await request.formData();
		db.deleteTag( data.get('id'));
	},
    assign: async ({ cookies, request }) => {
		const data = await request.formData();
		console.log();
        db.assignTag(data.get('idlist').split(','));
	}
};
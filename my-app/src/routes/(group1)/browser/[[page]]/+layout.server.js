import { error } from '@sveltejs/kit';
import * as db from '$lib/data.js';

export async function load(event) {
	//const post = posts.find((post) => post.slug === params.slug);
    let thumbs={},params=event.params||{}; 
    let search = event.url.searchParams;
    //console.log(event.locals.answer);  was created in hook.handle
    params.page = params.page ?? '1';
    params.listFiles=true;
    params.path= decodeURIComponent(search.get('path')||"");
    params.item= decodeURIComponent(search.get('item')||"");
    params.per_page= decodeURIComponent(search.get('per_page')||"5");
    params.search= search.get('search');
    params.page = parseInt(params.page,10);params.per_page = parseInt(params.per_page,10);
    thumbs.item = params.item, thumbs.itemId=-1,thumbs.itemTags=[];
    let posts = db.findPost(params.item);
    if(posts.length>0){
        thumbs.itemId=posts[0].id;
        thumbs.itemTags = db.findPostTags(thumbs.itemId);
    }
    
    await db.fetchData(params.path, params)
    .then(function (response) {
        thumbs.path = params.path;
        thumbs.current_page = response.current_page;
        thumbs.from = response.from;
        thumbs.to = response.to;
        thumbs.total = response.total;
        thumbs.per_page = response.per_page;
        thumbs.last_page = response.last_page;
        thumbs.rows = response.data;
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => { });
	if (!thumbs) throw error(404);
	return { 
		thumbs
	};
}

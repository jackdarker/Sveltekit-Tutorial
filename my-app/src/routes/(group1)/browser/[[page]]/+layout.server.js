import { error } from '@sveltejs/kit';
import {fetchData} from '$lib/data.js';

export async function load(event) {
	//const post = posts.find((post) => post.slug === params.slug);
    let thumbs,params=event.params||{}; 
    let search = event.url.searchParams;
    //console.log(event.locals.answer);  was created in hook.handle
    params.page = params.page ?? 1;
    params.listFiles=true;
    params.path= decodeURIComponent(search.get('path')||"");
    await fetchData(params.path, params)
    .then(function (response) {
        thumbs={};
        thumbs.path = response.path;
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
import * as db from '$lib/data.js';

export function load({ fetch,params,setHeaders,cookies,url }) {
	//let search = url.searchParams;
	//let item= decodeURIComponent(search.get('item')||"");
    return({allTags:db.getTagStatistic()});
}
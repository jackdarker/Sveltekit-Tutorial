import { error } from '@sveltejs/kit';
import { posts } from '../data.js';

export function load({ params,setHeaders }) {
    debugger
    console.log(params);
	const post = posts.find((post) => post.slug === params.slug);
    //setHeaders({'Content-Type': 'text/plain'}); //set flag to display all as text
	if (!post) throw error(404);

	return {
		post
	};
}

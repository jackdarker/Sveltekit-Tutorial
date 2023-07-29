export async function handle({ event, resolve }) {
	event.locals.answer = 42;
    if (event.url.pathname === '/ping') {
		return new Response('pong');
	}
	if('/public/_pics/1496956336.tomatocoup_cuffs_ring.jpg'===event.url.pathname) {
	//	return event.fetch(new Request("blob://D:/Projects/HTML/Sveltekit-Tutorial/my-app/static/art/Icon.1_01.png"));//"/art/Icon.1_01.png");  file:// is not supported ?!
	}
	
	return await resolve(event);
}

export async function handleFetch({ request, fetch }) {
    if (request.url.startsWith('https://api.yourapp.com/')) {
        // clone the original request, but change the URL
        request = new Request(
            request.url.replace('https://api.yourapp.com/', 'http://localhost:9999/'),
            request
        );
    }

    return fetch(request);
}
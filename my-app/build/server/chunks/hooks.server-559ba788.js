async function handle({ event, resolve }) {
  event.locals.answer = 42;
  if (event.url.pathname === "/ping") {
    return new Response("pong");
  }
  if ("/public/_pics/1496956336.tomatocoup_cuffs_ring.jpg" === event.url.pathname)
    ;
  return await resolve(event);
}
async function handleFetch({ request, fetch }) {
  if (request.url.startsWith("https://api.yourapp.com/")) {
    request = new Request(
      request.url.replace("https://api.yourapp.com/", "http://localhost:9999/"),
      request
    );
  }
  return fetch(request);
}

export { handle, handleFetch };
//# sourceMappingURL=hooks.server-559ba788.js.map

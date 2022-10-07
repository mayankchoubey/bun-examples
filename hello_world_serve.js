// Fetch function is the only mandatory parameter
// Port is 3000 if not specified

Bun.serve({
  port: 8080,
  fetch(request) {
    return new Response("Hello world");
  },
});

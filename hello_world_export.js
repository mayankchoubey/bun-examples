// Fetch function is the only mandatory parameter
// Port is 3000 if not specified

export default {
  port: 8080,
  fetch(request) {
    return new Response("Hello world");
  },
};

Bun.serve({
  port: 3000,
  fetch(_) {
    return new Response("Hello world!");
  },
  certFile: "./certs/localhost.crt",
  keyFile: "./certs/localhost.key",
});

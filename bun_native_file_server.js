const { stat } = require("fs").promises;

const BASE_PATH = "./public";

Bun.serve({
  port: 3000,
  async fetch(req) {
    const filePath = BASE_PATH + new URL(req.url).pathname;
    const fileData = await stat(filePath);
    const file = Bun.file(filePath);
    return new Response(file);
  },
  error() {
    return new Response(null, { status: 404 });
  },
});
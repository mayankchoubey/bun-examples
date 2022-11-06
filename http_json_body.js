Bun.serve({
  port: 3000,
  async fetch(request) {
    const reqBody = await request.json();
    const ret = [];
    reqBody.forEach((e) => ret.push(e.name));
    return Response.json(ret);
  },
});

Bun.serve({
  port: 3000,
  async fetch(request) {
    const rawBody = await request.text();
    const reqBody = new URLSearchParams(rawBody);
    let totalParams = 0;
    reqBody.forEach((_) => totalParams++);
    return new Response(new URLSearchParams({ totalParams }), {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    });
  },
});

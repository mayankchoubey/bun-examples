const f = Bun.file("./public/sample.pdf");
const req = new Request({
  url: "https://mayank2.free.beeceptor.com",
  method: "POST",
  body: await f.arrayBuffer(),
  headers: {
    "content-type": "application/pdf",
  },
});
const res = await fetch(req);
console.log(res.ok, res.status);

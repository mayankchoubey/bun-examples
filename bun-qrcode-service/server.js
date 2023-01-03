import QRCode from "qrcode";

async function getQRImage(forUrl) {
  return await QRCode.toString(forUrl, {
    type: "svg",
  });
}

async function reqHandler(req) {
  if (req.method !== "GET") {
    return new Response(null, { status: 405 });
  }
  const u = new URL(req.url);
  if (u.pathname !== "/qr") {
    return new Response(null, { status: 404 });
  }
  const forUrl = u.searchParams.get("forUrl");
  if (!forUrl) {
    return new Response("forUrl is missing in query params", { status: 400 });
  }
  return new Response(await getQRImage(forUrl), {
    headers: {
      "content-type": "image/svg+xml",
    },
  });
}

Bun.serve({ port: 3000, fetch: reqHandler });

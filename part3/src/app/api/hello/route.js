export async function GET(request) {
  // url query parameters
  const searchParams = new URL(request.url).searchParams;
  const name = searchParams.get("name") || "World";
  return Response.json({ message: `Hello ${name}!` });
}

export async function POST(request) {
  const json = await request.json();
  return Response.json({ message: `Hello ${json.name || "World"}!` });
}

export async function PATCH(request) {
  const formData = await request.formData();
  const name = formData.get("name") || "World";
  return Response.json({ message: `Hello ${name || "World"}!` });
}


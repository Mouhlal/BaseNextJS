export async function GET() {
    const products = await fetch("https://fakestoreapi.com/products");
    const data = await products.json();
    return Response.json(data);
}


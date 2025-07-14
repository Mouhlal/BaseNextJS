export const dynamic = 'force-dynamic'; // This ensures the route is always fresh
export async function GET(request) {
    const name = request.nextUrl.searchParams.get('name') || 'Guest';
    return Response.json(new Date().toISOString() + ` Hello ${name}`);
}
import { cookies } from "next/headers";

export async function GET(request) {
    // pour obtenir le cookie d'un request
    // Api , router handlers  
     request.cookie.get();

    // pour obtenir le cookie du navigateur (server component = cookies())
    const cookie = cookies();
    const name = cookie.get("name")?.value || "Guest";
    cookie.delete(name)
    return Response.json({ name }); 
}


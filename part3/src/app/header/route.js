export async function GET(request) {
    //headers qui seront envoyés dans la réponse (server)
    const headers = new Headers();
    headers.set("Content-Type", "application/json");
    headers.set("X-Custom-Header", "MyHeaderValue");

    return new Response(JSON.stringify({ message: "Header " }), {
        status: 200,
        headers: headers,
    });
    //header qui sera envoyé dans la réponse (client)
    /* return new Response(JSON.stringify({ message: "Header " }), {
        status:200,
        headers: {
            "Content-Type": "application/json",
        },
    }); */
    
}
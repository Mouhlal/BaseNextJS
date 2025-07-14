import { redirect } from "next/navigation";

export async function GET(request) {
    redirect('/api/fruits');
    // redirect('https://example.com'); // Example of redirecting to an external URL
}


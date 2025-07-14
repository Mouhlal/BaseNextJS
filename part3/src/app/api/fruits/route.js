//cached by default get request
export async function GET() {
  const fruits = [
    { id: 1, name: "Apple", color: "Red" },
    { id: 2, name: "Banana", color: "Yellow" },
    { id: 3, name: "Grapes", color: "Purple" },
    { id: 4, name: "Orange", color: "Orange" },
    { id: 5, name: "Kiwi", color: "Brown" },
  ];
  return Response.json(fruits);
}
export async function POST(request) {
   const fruits = [
    { id: 1, name: "Apple", color: "Red" },
    { id: 2, name: "Banana", color: "Yellow" },
    { id: 3, name: "Grapes", color: "Purple" },
    { id: 4, name: "Orange", color: "Orange" },
    { id: 5, name: "Kiwi", color: "Brown" },
  ];
  return Response.json(fruits);
}
export async function PUT(request) {}
export async function DELETE(request) {}
export async function PATCH(request) {}
export async function HEAD(request) {}

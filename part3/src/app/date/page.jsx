"use client";
//"force-dynamic" → force le rendu dynamique à chaque requête
export const dynamic = "force-dynamic";

export default function CurrentTime() {
  const currentTime = new Date().toLocaleTimeString();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Heure actuelle</h1>
      <p className="text-lg">{currentTime}</p>
    </div>
  );
}

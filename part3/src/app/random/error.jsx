'use client'

export default function Error({ error, reset }) {
  return (
    <div className="text-red-600 p-4 border border-red-400 bg-red-100">
      <h2 className="text-xl font-bold mb-2">{error.name}</h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Réessayer
      </button>
    </div>
  );
}

'use client';

import { useRouter } from 'next/navigation';

export default function Hello({ params }) {
  const router = useRouter();

  const handleClick = () => {
    console.log("Hello World");
    router.push('/');
  };

  return (
    <>
      <div className="text-xl mb-4">Hello {params.name}</div>
      <button onClick={handleClick} className="bg-blue-500 text-white p-2 rounded">
        Home
      </button>
    </>
  );
}

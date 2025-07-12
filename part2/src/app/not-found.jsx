import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function NotFound() {
    return <div>Not found Page</div>;
}

export function NotFoundComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 p-4 rounded-full">
            <svg
              className="w-16 h-16 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-2">404 - Page introuvable</h1>
        <p className="text-gray-600 mb-6">
          Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 shadow-md hover:shadow-lg">
            Retour à l'accueil
          </Link>
          <Link href="/contact" className="px-6 py-3 border border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-medium rounded-lg transition duration-200">
            Nous contacter
          </Link>
        </div>
      </div>
      
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Nom de votre entreprise. Tous droits réservés.</p>
      </div>
    </div>
  );
}
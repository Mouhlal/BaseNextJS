// app/products/[productId]/page.js

const products = [
  { id: '1', name: 'Product 1', description: 'Description du produit 1' },
  { id: '2', name: 'Product 2', description: 'Description du produit 2' },
  { id: '3', name: 'Product 3', description: 'Description du produit 3' },
];

// ✅ Fonction spéciale Next.js pour générer le SEO dynamique
export async function generateMetadata({ params }) {
  const product = products.find(p => p.id === params.productId);

  if (!product) {
    return {
      title: 'Produit non trouvé',
      description: 'Aucun produit trouvé pour cet ID.',
    };
  }
  
  return {
    title: product.name,
    description: product.description,

   /*  openGraph: {
      title: product.name,
      description: product.description,
      url: `https://nutstree.ma/products/${product.id}`, // ou localhost en dev
      siteName: 'Nutstree',
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
        }, 
      ],
      locale: 'fr_FR',
      type: 'product',
    },
  }; */

  };
}
 
// Page affichée avec le produit
export default function DetailsProduct({ params }) {
  const product = products.find(p => p.id === params.productId);

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}

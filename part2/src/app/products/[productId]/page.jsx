const products = [
  { id: '1', name: 'Product 1', description: 'Description du produit 1' },
  { id: '2', name: 'Product 2', description: 'Description du produit 2' },
  { id: '3', name: 'Product 3', description: 'Description du produit 3' },
];

// La page reçoit automatiquement les params
export default function DetailsProduct({ params }) {
  const { productId } = params;

  // Trouve le produit selon l’id
  const product = products.find(p => p.id === productId);

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

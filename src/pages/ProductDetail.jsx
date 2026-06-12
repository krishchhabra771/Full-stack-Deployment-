import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowLeft } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h3 className="text-xl font-semibold">Product Not Found</h3>
        <Link to="/catalog" className="mt-4 inline-block text-blue-600 hover:underline">Return to Catalog</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Link to="/catalog" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 mb-8 transition-colors">
        <ArrowLeft size={16} /> Back to catalog
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <img src={product.image} alt={product.name} className="w-full aspect-square object-cover rounded-2xl border border-gray-100 shadow-sm" />
        <div>
          <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">{product.category}</span>
          <h1 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-gray-900 mb-6">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>
          <button className="w-full sm:w-auto bg-gray-950 text-white px-8 py-3.5 rounded-xl font-medium hover:bg-gray-800 transition-colors">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img 
        src={product.image} 
        alt={product.name} 
        loading="lazy" 
        className="w-full h-48 object-cover bg-gray-50"
      />
      <div className="p-4">
        <span className="text-xs font-semibold text-blue-600 tracking-wide uppercase">{product.category}</span>
        <h3 className="font-semibold text-gray-900 mt-1 line-clamp-1">{product.name}</h3>
        <p className="text-gray-700 font-bold mt-2">${product.price.toFixed(2)}</p>
        <Link 
          to={`/product/${product.id}`} 
          className="mt-4 block text-center w-full bg-gray-900 text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

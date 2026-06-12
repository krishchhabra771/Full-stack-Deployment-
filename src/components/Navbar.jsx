import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-900 tracking-tight">ShopSphere</Link>
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-gray-600 hover:text-gray-950 font-medium">Home</Link>
          <Link to="/catalog" className="text-gray-600 hover:text-gray-950 font-medium">Catalog</Link>
          <div className="relative cursor-pointer text-gray-700 hover:text-gray-950">
            <ShoppingBag size={22} />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

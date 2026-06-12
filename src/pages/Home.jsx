import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center py-20 px-4">
      <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
        Discover Our Curated <span className="text-blue-600">Product Collection</span>
      </h1>
      <p className="text-lg text-gray-500 mt-4 max-w-xl mx-auto">
        Explore high-quality, high-performance tech accessories and apparel engineered for everyday modern utility.
      </p>
      <Link 
        to="/catalog" 
        className="mt-8 inline-block bg-blue-600 text-white px-8 py-3 rounded-xl font-medium shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all"
      >
        Browse Full Catalog
      </Link>
    </div>
  );
}

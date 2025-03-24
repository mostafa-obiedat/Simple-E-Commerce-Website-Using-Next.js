// app/404.js
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white text-center py-16">
      <div>
        <h1 className="text-6xl font-bold text-yellow-400 mb-4">404</h1>
        <p className="text-xl mb-6">Oops! The page you're looking for does not exist.</p>
        <Link href="/" passHref>
          <button className="bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-500">
            Go Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

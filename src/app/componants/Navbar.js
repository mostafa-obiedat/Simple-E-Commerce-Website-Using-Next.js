'use client';

import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-gray-900 text-yellow-300 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Shop</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-200">Home</Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-gray-200">Products</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-200">About Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
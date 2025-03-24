// app/products/page.js
import axios from "axios";
import Link from "next/link";

// Server Component: Fetch data directly inside the component
export default async function ProductsPage() {
  try {
    const res = await axios.get(
      "https://testtt-58b94-default-rtdb.firebaseio.com/products.json"
    );

    if (!res.data) {
      throw new Error("No data found");
    }

    const products = res.data;

    if (!products.length) {
      return <div>No products available</div>;
    }

    return (
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {product.title}
                </h2>
                <p className="text-xl text-blue-600 font-semibold mb-6">
                  ${product.price}
                </p>
                <Link
                  href={`/products/${product.id}`}
                  className="block w-full text-center bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                  More Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Fetch error:", error);
    return <div>Error fetching products</div>;
  }
}

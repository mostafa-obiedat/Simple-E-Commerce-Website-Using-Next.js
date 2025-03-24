import { Metadata } from "next";
import axios from "axios";

async function getProduct(id) {
  try {
    const res = await axios.get(
      `https://testtt-58b94-default-rtdb.firebaseio.com/products/${id - 1}.json`
    );

    // التحقق من الاستجابة
    if (!res.data) {
      throw new Error(`Failed to fetch product with id ${id}`);
    }

    return res.data;
  } catch (error) {
    console.error(error);
    return null; // إذا حدث خطأ، يرجع null
  }
}

/** @type {import('next').GenerateMetadata} */
export async function generateMetadata({ params }) {
  const product = await getProduct(params.id);

  if (!product) {
    return {
      title: "Product not found",
      description: "This product does not exist.",
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-center p-8 bg-white shadow-lg rounded-xl">
          <h1 className="text-3xl font-bold text-red-500 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600">
            We apologize, but the product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-2xl">
        <div className="p-8 space-y-6">
          <div className="flex justify-between items-center border-b pb-4">
            <h1 className="text-4xl font-bold text-blue-800">
              {product.title}
            </h1>
            <span className="text-3xl font-semibold text-green-600">
              ${product.price}
            </span>
          </div>

          {product.description && (
            <div className="text-gray-700 text-lg">
              <h2 className="font-bold text-xl mb-2">Description:</h2>
              <p>{product.description}</p>
            </div>
          )}

          <div className="flex space-x-4">
            <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300">
              Add to Cart
            </button>
            <button className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition duration-300">
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

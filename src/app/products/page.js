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
      <div className="flex justify-around items-center text-yellow-300 h-[90vh]">
        {products.map((product) => (
          <div key={product.id} className="border p-10">
            <div>{product.title}</div>
            <div>{product.price}</div>
            <button className="border rounded-2xl p-2 m-2 hover:cursor-pointer hover:bg-yellow-300 hover:text-black">
              <Link href={`/products/${product.id}`}>more details...</Link>
            </button>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Fetch error:", error);
    return <div>Error fetching products</div>;
  }
}

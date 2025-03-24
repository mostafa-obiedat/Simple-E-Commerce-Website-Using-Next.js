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
    return <div>Product not found</div>; // إذا لم يتم العثور على المنتج، إظهار رسالة
  }

  return (
    <div className="flex justify-around items-center text-yellow-300 h-[90vh]">
      <div key={product.id} className="border p-10 text-3xl flex flex-col gap-5">
        <div>{product.title}</div>
        <div>{product.price}</div>
      </div>
    </div>
  );
}

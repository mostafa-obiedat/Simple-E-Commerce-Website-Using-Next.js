// app/404.js
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-800 text-white text-center py-16">
      <div className="bg-white/10 backdrop-blur-md p-12 rounded-2xl shadow-2xl border border-white/20">
        <h1 className="text-7xl font-extrabold text-teal-300 mb-6 drop-shadow-lg">
          404
        </h1>
        <p className="text-2xl mb-8 text-gray-200">
          Oops! الصفحة التي تبحث عنها غير موجودة.
        </p>
        <Link href="/" passHref>
          <button className="bg-teal-500 text-white py-3 px-6 rounded-xl hover:bg-teal-600 transition-colors duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            العودة إلى الصفحة الرئيسية
          </button>
        </Link>
      </div>
    </div>
  );
}

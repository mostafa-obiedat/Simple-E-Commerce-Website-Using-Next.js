// app/about/page.js
import Image from "next/image";
import Head from "next/head";

export default function AboutPage() {
  return (
    <div className=" min-h-screen">
      {/* SEO optimizations */}
      <Head>
        <title>About Us - My Website</title>
        <meta
          name="description"
          content="Learn more about our team and mission."
        />
        <meta name="keywords" content="about us, team, mission, website" />
        <meta name="author" content="Your Name or Company" />
      </Head>

      {/* Content of About Us page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center text-yellow-300 mb-8">
          About Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image section */}
          <div className="flex justify-center items-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Color_icon_yellow.svg/420px-Color_icon_yellow.svg.png" // ضع المسار الفعلي للصورة هنا
              alt="Our Team"
              width={500} // عرض الصورة
              height={500} // ارتفاع الصورة
              className="rounded-lg shadow-lg w-90" // إضافة بعض التنسيق للصورة
            />
          </div>

          {/* Text section */}
          <div>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-300 mb-4">
              We are a passionate team dedicated to delivering high-quality
              solutions to our clients. Our mission is to provide exceptional
              services while maintaining a focus on customer satisfaction,
              innovation, and continuous improvement.
            </p>

            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
              Our Team
            </h2>
            <p className="text-gray-300">
              Our team is made up of talented and motivated individuals with a
              diverse range of skills. We work collaboratively to achieve our
              goals and deliver outstanding results for our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

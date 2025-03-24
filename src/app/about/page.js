// app/about/page.js
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          <div className="p-8 lg:p-12">
            <h1 className="text-5xl font-bold text-center text-blue-800 mb-12">
              About Our Company
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image section */}
              <div className="flex justify-center items-center">
                <div className="relative w-full max-w-md">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Color_icon_yellow.svg/420px-Color_icon_yellow.svg.png"
                    alt="Our Team"
                    width={500}
                    height={500}
                    className="rounded-2xl shadow-lg transform transition duration-300 hover:scale-105"
                  />
                </div>
              </div>

              {/* Text section */}
              <div>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-semibold text-blue-600 mb-4">
                      Our Mission
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      We are a passionate team dedicated to delivering
                      high-quality solutions to our clients. Our mission is to
                      provide exceptional services while maintaining a focus on
                      customer satisfaction, innovation, and continuous
                      improvement.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-semibold text-blue-600 mb-4">
                      Our Team
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Our team is made up of talented and motivated individuals
                      with a diverse range of skills. We work collaboratively to
                      achieve our goals and deliver outstanding results for our
                      clients.
                    </p>
                  </div>

                  <div className="flex space-x-4 mt-8">
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
                      Contact Us
                    </button>
                    <button className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-300">
                      Our Services
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
        <h1 className="text-6xl text-white font-bold drop-shadow-lg tracking-wide">
          Welcome to the Home Page
        </h1>
      </div>
    </>
  );
}

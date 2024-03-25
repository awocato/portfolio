"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const CustomErrorPage = () => {
  const [catImage, setCatImage] = useState(null);

  useEffect(() => {
    const fetchCatImage = async () => {
      try {
        const res = await fetch(
          `https://api.thecatapi.com/v1/images/search?api_key=${process.env.API_KEY}`
        );
        const data = await res.json();
        setCatImage(data[0]?.url);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCatImage();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold dark:text-pinkish text-greenish">
          Oops!
        </h1>
        <p className="mt-3 text-lg text-gray-600">Something went wrong...</p>
      </div>
      <p className="mt-2 text-center">Here`s a cat to cheer you up!</p>
      {catImage && (
        <div className="mt-10">
          <Image
            width={500}
            height={500}
            src={catImage}
            alt="Cat"
            className="w-full max-w-md mx-auto rounded-lg"
            priority={true}
          />
        </div>
      )}
    </div>
  );
};

export default CustomErrorPage;

"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
function Hero() {
  const router = useRouter();
  const contact = () => {
    router.push("/contact");
  };
  const about = () => {
    router.push("/about");
  };
  return (
    <>
      <section className="text-gray-600 bg-yellow-500 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
         <Image src="/hero/hero.webp" className="rounded" alt="hero" width={500} height={500} />
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Welcome To Sankat Mochan Group Of Institutions Best School in
              <br className="hidden lg:inline-block" />
              Sultanpur
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              Welcome to Sankat Mochan Group of Institutions! Embrace excellence
              in education with us. Explore a holistic learning environment that
              nurtures minds and shapes futures. For inquiries, admissions, or
              assistance, contact us at <strong className="text-gray-900">contact@smgoi.com</strong>  or call <strong className="text-gray-900">+91
              8960788977</strong>. Step into our campus at Kariya Bajhna,Sultanpur,Uttar
              Pradesh and embark on a journey of knowledge and growth. Your
              education, your future &hyphen; let's create it together!
            </p>
            <div className="flex justify-center">
              <button
                onClick={about}
                className="inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-red-900 rounded text-lg"
              >
                About Us
              </button>
              <button
                onClick={contact}
                className="ml-4 inline-flex text-gray-900 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

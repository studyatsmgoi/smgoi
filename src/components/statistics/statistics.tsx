import React from "react";
import Image from "next/image";
export default function Statistic() {
  const stats = [
    {
      data: "30K",
      title: "Alumni",
    },
    {
      data: "150+",
      title: "Teachers",
    },
    {
      data: "25+",
      title: "Hospitality Staff",
    },
  ];
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-white gap-x-12 items-start justify-between lg:flex md:px-8">
        <div className="sm:hidden lg:block lg:max-w-xl">
          <Image
            src="/school/1.webp"
            className="rounded-lg"
            height={800}
            width={800}
            alt="hello"
          />
        </div>
        <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
          <div className="max-w-2xl">
            <h3 className="text-yellow-500 text-3xl font-semibold sm:text-4xl">
              Welcome to Sankat Mochan Group Of Institutions Family
            </h3>
            <p className="mt-3 max-w-xl">
              We are dedicated to providing quality education and creating a
              nurturing environment for students to thrive. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Morbi venenatis
              sollicitudin quam ut tincidunt.
            </p>
          </div>
          <div className="flex-none mt-6 md:mt-0 lg:mt-6">
            <ul className="inline-grid gap-y-8 gap-x-14 grid-cols-2">
              {stats.map((item, idx) => (
                <li key={idx} className="">
                  <h4 className="text-4xl text-yellow-500 font-semibold">
                    {item.data}
                  </h4>
                  <p className="mt-3 font-medium">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

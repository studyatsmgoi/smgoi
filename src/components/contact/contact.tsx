"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ContactMe() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB_FORM ?? '');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      console.log("Thank You");
    }
  }

  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: "contact@smgoi.com",
      url: "mailto:contact@smgoi.com",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      contact: "+91 9198634977",
      url: "tel:+919198634977",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      contact: "+91 8960788977",
      url: "tel:+918960788977",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      contact: "Kariya Bajhna,Kurebhar,Sultanpur,Pin-code-228142",
      url: "https://maps.app.goo.gl/DyHbWwPVJ4AettWbA",
    },
  ];

  return (
    <main className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-white md:px-8">
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg space-y-3">
            <h3 className="text-yellow-500 font-semibold">Contact</h3>
            <p className="text-white text-3xl font-semibold sm:text-4xl">
              Let us know how we can help
            </p>
            <p>
              Feel free to reach out to us at Sankat Mochan Group of Institutions.
              For inquiries, admissions, or any assistance, contact us at{" "}
              <strong className="text-yellow-500">contact@smgoi.com</strong> or call{" "}
              <strong className="text-yellow-500">+91 8960788977</strong>. Our team is here
              to help you navigate the educational journey with us. Visit our campus at
              Kariya Bajhna, Sultanpur, Uttar Pradesh to experience firsthand the nurturing
              environment we offer. We look forward to connecting with you and being a part
              of your educational aspirations.
            </p>
            <div>
              <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                {contactMethods.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-x-3 hover:text-yellow-500"
                  >
                    <div className="flex-none text-white hover:text-yellow-500">
                      <Link href={item.url}>{item.icon}</Link>
                    </div>
                    <Link href={item.url}>
                      <p>{item.contact}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-medium" htmlFor="name">
                  Full name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border-2 focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border-2 focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  name="message"
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border-2 focus:border-indigo-600 shadow-sm rounded-lg"
                ></textarea>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-white font-medium bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-lg duration-150"
                  >
                    Submit
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Thank You For Contacting Us!</DialogTitle>
                    <DialogDescription>
                      We will reach you as soon as possible.
                    </DialogDescription>
                  </DialogHeader>

                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="submit">Close</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

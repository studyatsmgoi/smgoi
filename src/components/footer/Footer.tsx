import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Image src="/icons/smgoilogo.webp" alt="Picture of the author" width={45} height={45} loading="lazy" />
        <span className="ml-3 text-xl text-yellow-500">Sankat Mochan Group Of Institutions</span>
     </Link>
      <p className="text-md font-bold text-yellow-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      <Link href="/"  className="text-yellow-500 text-md ml-1">
        © 2020 Sankat Mochan Group Of Institutions —
          @smgoi
          </Link>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-3">
      <Link href="https://instagram.com/studyatsmgoi"  >
       <Image src="/social/instagram.svg" height={25} width={25} alt="Instagram Page Of Sankat Mochan Group Of Institutions" loading="lazy" />
       </Link>
       <Link href="https://facebook.com/studyatsmgoi" >
       <Image src="/social/facebook.svg" height={25} width={25} alt="Facebook Page Of Sankat Mochan Group Of Institutions" loading="lazy" />
       </Link>
       <Link href="https://youtube.com/@studyatsmgoi" >
       <Image src="/social/youtube.svg" height={25} width={25} alt="Youtube Channel Of Sankat Mochan Group Of Institutions" loading="lazy" />
       </Link>
       <Link href="https://twitter.com/studyatsmgoi">
        <Image src="/social/twitter.svg" height={25} width={25} alt="Twitter Page Of Sankat Mochan Group Of Institutions" loading="lazy" />
       </Link>
       <Link href="https://threads.net/@studyatsmgoi">
        <Image src="/social/thread.svg" height={25} width={25} alt="Thread Page Of Sankat Mochan Group Of Institutions" loading="lazy" />
       </Link>
      </span>
    </div>
  </footer>  
  );
}

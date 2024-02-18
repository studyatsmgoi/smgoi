import Head from "next/head";
import dynamic from "next/dynamic";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:{
    absolute:"Faculty | Sankat Mochan Group Of Institutions | Sultanpur | Uttar Pradesh (U.P.)",
  }
};
const ComputerScienceDepartment = dynamic(
  () => import("@/components/faculty/departments/computersciencedepartment")
);
const HindiDepartment = dynamic(
  () => import("@/components/faculty/departments/hindidepartment")
);
const MathsDepartment = dynamic(
  () => import("@/components/faculty/departments/mathsdepartment")
);
const ScienceDepartment = dynamic(
  () => import("@/components/faculty/departments/sciencedepartment")
);
const SSTDepartment = dynamic(
  () => import("@/components/faculty/departments/sstdepartment")
);
const EnglishDepartment = dynamic(
  () => import("@/components/faculty/departments/englishdepartment")
);

export default function Faculty() {
  return (
    <>
      <Head>
        <title>Our Faculty | Sankat Mochan Group Of Institutions</title>
        <meta
          name="description"
          content="Meet the dedicated faculty at Sankat Mochan Group Of Institutions, where excellence meets passion. Our diverse team of educators is committed to fostering intellectual growth and holistic development through innovative teaching methods. Explore our faculty's qualifications, research endeavors, and their role in shaping future leaders. Join us on the journey of knowledge, growth, and success."
        />
        <meta
          property="og:title"
          content="Frequently Asked Questions | Sankat Mochan Group Of Institutions"
        />
        <meta
          property="og:description"
          content="Find answers to frequently asked questions about Sankat Mochan Group Of Institutions. If you can't find the answer you're looking for, feel free to contact us."
        />
        <meta
          name="twitter:title"
          content="Frequently Asked Questions | Sankat Mochan Group Of Institutions"
        />
        <meta
          name="twitter:description"
          content="Find answers to frequently asked questions about Sankat Mochan Group Of Institutions. If you can't find the answer you're looking for, feel free to contact us."
        />
      </Head>
      <ScienceDepartment />
      <MathsDepartment />
      <ComputerScienceDepartment />
      <EnglishDepartment />
      <HindiDepartment />
      <SSTDepartment />
    </>
  );
}

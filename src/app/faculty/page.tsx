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
        <meta property="og:url" content="https://smgoi.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Faculty | Sankat Mochan Group Of Institutions | Sultanpur | Uttar Pradesh (U.P.)"
        />
        <meta
          property="og:description"
          content="Welcome to Sankat Mochan Group of Institutions, an academic haven situated in the tranquil town of Kariya Bajhna, Sultnapur, Uttar Pradesh, with the zip code 228142. Affiliated with the esteemed Central Board of Secondary Education (CBSE), our institution stands as a symbol of educational excellence, shaping the destinies of young minds.  Immerse yourself in a holistic educational experience against the scenic backdrop of Uttar Pradesh. Sankat Mochan Group of Institutions blends academic prowess, artistic expression, and athletic achievement, crafting a comprehensive learning environment that extends beyond conventional classrooms.  Discover a passion for learning with our dedicated faculty, committed to igniting curiosity, fostering creativity, and encouraging critical thinking. Our campus boasts modern facilities, including well-appointed classrooms, advanced laboratories, and expansive sports fields, ensuring a conducive setting for academic and personal development.  Beyond academic rigor, we emphasize character development, instilling values of compassion, responsibility, and global awareness. As proud affiliates of the CBSE board, our curriculum aligns with national standards, preparing students for a future of academic success and competitive excellence.  Sankat Mochan Group of Institutions is more than just a school—it's a community dedicated to unlocking the potential within each student. Join us on this educational journey, where every day presents an opportunity to learn, grow, and thrive. Together, let's pave the way for a brighter future, nurturing the leaders and innovators of tomorrow."
        />
        <meta property="og:image" content="https://smgoi.com/backseo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="smgoi.com" />
        <meta property="twitter:url" content="https://smgoi.com" />
        <meta
          name="twitter:title"
          content="Faculty | Sankat Mochan Group Of Institutions | Sultanpur | Uttar Pradesh (U.P.)"
        />
        <meta
          name="twitter:description"
          content="Welcome to Sankat Mochan Group of Institutions, an academic haven situated in the tranquil town of Kariya Bajhna, Sultnapur, Uttar Pradesh, with the zip code 228142. Affiliated with the esteemed Central Board of Secondary Education (CBSE), our institution stands as a symbol of educational excellence, shaping the destinies of young minds.  Immerse yourself in a holistic educational experience against the scenic backdrop of Uttar Pradesh. Sankat Mochan Group of Institutions blends academic prowess, artistic expression, and athletic achievement, crafting a comprehensive learning environment that extends beyond conventional classrooms.  Discover a passion for learning with our dedicated faculty, committed to igniting curiosity, fostering creativity, and encouraging critical thinking. Our campus boasts modern facilities, including well-appointed classrooms, advanced laboratories, and expansive sports fields, ensuring a conducive setting for academic and personal development.  Beyond academic rigor, we emphasize character development, instilling values of compassion, responsibility, and global awareness. As proud affiliates of the CBSE board, our curriculum aligns with national standards, preparing students for a future of academic success and competitive excellence.  Sankat Mochan Group of Institutions is more than just a school—it's a community dedicated to unlocking the potential within each student. Join us on this educational journey, where every day presents an opportunity to learn, grow, and thrive. Together, let's pave the way for a brighter future, nurturing the leaders and innovators of tomorrow."
        />
        <meta name="twitter:image" content="https://smgoi.com/backseo.png" />
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

import dynamic from "next/dynamic";
import Head from "next/head";
const Hero = dynamic(() => import("@/components/hero/hero"));
const Statistic = dynamic(() => import("@/components/statistics/statistics"));
const Desk = dynamic(() => import("@/components/desk/desk"));
import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    absolute:
      "Home | Sankat Mochan Group Of Institutions | Sultanpur | Uttar Pradesh (U.P.)",
  },
};
export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://smgoi.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Home | Sankat Mochan Group Of Institutions | Sultanpur | Uttar Pradesh (U.P.)"
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
          content="Home | Sankat Mochan Group Of Institutions | Sultanpur | Uttar Pradesh (U.P.)"
        />
        <meta
          name="twitter:description"
          content="Welcome to Sankat Mochan Group of Institutions, an academic haven situated in the tranquil town of Kariya Bajhna, Sultnapur, Uttar Pradesh, with the zip code 228142. Affiliated with the esteemed Central Board of Secondary Education (CBSE), our institution stands as a symbol of educational excellence, shaping the destinies of young minds.  Immerse yourself in a holistic educational experience against the scenic backdrop of Uttar Pradesh. Sankat Mochan Group of Institutions blends academic prowess, artistic expression, and athletic achievement, crafting a comprehensive learning environment that extends beyond conventional classrooms.  Discover a passion for learning with our dedicated faculty, committed to igniting curiosity, fostering creativity, and encouraging critical thinking. Our campus boasts modern facilities, including well-appointed classrooms, advanced laboratories, and expansive sports fields, ensuring a conducive setting for academic and personal development.  Beyond academic rigor, we emphasize character development, instilling values of compassion, responsibility, and global awareness. As proud affiliates of the CBSE board, our curriculum aligns with national standards, preparing students for a future of academic success and competitive excellence.  Sankat Mochan Group of Institutions is more than just a school—it's a community dedicated to unlocking the potential within each student. Join us on this educational journey, where every day presents an opportunity to learn, grow, and thrive. Together, let's pave the way for a brighter future, nurturing the leaders and innovators of tomorrow."
        />
        <meta name="twitter:image" content="https://smgoi.com/backseo.png" />
      </Head>
      <div className="pt-8">
        <Hero />
        <Statistic />
        <Desk
          who="What Our Founder Says"
          name="Mr. Surendra Pratap Singh"
          role="Founder Of Sankat Mochan Group Of Institutions"
          quote="In the tapestry of education, a founder weaves the threads of vision, passion, and determination to create a masterpiece called knowledge. At Sankat Mochan Group of Institutions, our founder lights the path for future generations."
          image="/management/director.webp"
          bgcolor="bg-yellow-500"
        />

        <Desk
          who="What Our President Says"
          name="Mrs.Aruna Singh"
          role="President Of Sankat Mochan Group Of Institutions"
          quote="As the guiding force at Sankat Mochan Group of Institutions, our president is the architect of innovation and progress. With a vision that transcends boundaries, they lead by example, inspiring a community of learners to reach new heights and embrace the boundless possibilities of education."
          image="/management/president.webp"
          bgcolor=""
        />

        <Desk
          who="What Our Manager Says"
          name="Mr. Rahul Maurya"
          role="Manager Of Sankat Mochan Group Of Institutions"
          quote="A manager orchestrates the symphony of learning, ensuring each note of progress resonates through the corridors of Sankat Mochan Group of Institutions. Guiding with wisdom, our manager transforms challenges into opportunities for growth."
          image="/management/manager.webp"
          bgcolor="bg-yellow-500"
        />

        <Desk
          who="What Our Principal(Senior's Classes) Says"
          name="Mr. Jai Prakash Yadav"
          role="Principal Of Sankat Mochan Group Of Institutions"
          quote="As the captain of our academic ship, the principal steers Sankat Mochan Group of Institutions towards the shores of excellence. With dedication as their compass, they navigate the seas of education, shaping bright minds and promising futures."
          image="/management/principalofseniors.webp"
          bgcolor=""
        />

        <Desk
          who="What Our Principal(Junior's Classes) Says"
          name="Mrs. Jyoti Singh"
          role="Principal Of Sankat Mochan Group Of Institutions"
          quote="In the educational journey, the principal stands as the steadfast companion, supporting the founder's vision and fostering an environment where students at Sankat Mochan Group of Institutions can thrive. Together, they chart a course towards educational success."
          image="/management/principalofjuniors.webp"
          bgcolor="bg-yellow-500"
        />
      </div>
    </>
  );
}

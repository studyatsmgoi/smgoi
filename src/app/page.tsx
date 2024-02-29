import dynamic from "next/dynamic";
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
          name="Mr. Jai Prakash Verma"
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

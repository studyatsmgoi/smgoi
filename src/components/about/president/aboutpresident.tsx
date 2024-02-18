import dynamic from "next/dynamic";
const AboutProfile = dynamic(() => import("../aboutcard"));
export default function AboutPresident() {
  return (
    <>
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 lg:px-4">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                About President
              </h1>
              <div className="h-1 w-20 bg-yellow-500 rounded" />
              <div className="flex mt-6">
                <AboutProfile
                  name="Mrs. Aruna Singh"
                  role="President"
                  mobile={7007959556}
                  email="president@smgoi.com"
                  image="/management/president.webp"
                  address=" Kariya Bajhna ,Sultanpur ,Uttar Pradesh ,India ,Pin Code - 228142"
                  imgalt="President Of Sankat Mochan Group Of Institutions"
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:px-4 lg:mt-16">
            <p className="lg:w-3/3 w-full leading-relaxed text-white text-lg text-opacity-90">My dear students,</p>
              <p className="lg:w-3/3 w-full leading-relaxed text-gray-300 text-opacity-90">
                <q className="text-white text-md">Education is the key to success and success is a journey, not a destination</q> <br />
                I am proud and privileged to present this message in front of
                you with a sense of commitment and determinationin the field of
                education . I advice all students to work on their
                studies,inculcate more and more passion for knowledge and
                succeed in their life.Teachers are like candles,burning
                themselves in the process of teaching and learning . I appeal to
                all the teachers to perform their duties with sense of hard work
                ,commitment and teamwork to attain aims and objectives in the
                education process and make it a grand success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

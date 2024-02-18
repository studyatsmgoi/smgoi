import dynamic from "next/dynamic";
const AboutProfile = dynamic(() => import("../aboutcard"));
export default function AboutPrincipalOfSenior() {
  return (
    <>
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 lg:px-4">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                About Principal(Senior&lsquo;s Classes)
              </h1>
              <div className="h-1 w-20 bg-yellow-500 rounded" />
              <div className="flex mt-6">
                <AboutProfile
                  name="Mr. Jai Prakash Verma"
                  role="Principal"
                  mobile={9792792291}
                  email="principalofseniors@smgoi.com"
                  image="/management/principalofseniors.webp"
                  address="Dafalpur ,Sultanpur ,Uttar Pradesh ,India ,Pin Code - 228125"
                  imgalt="Principal Of Sankat Mochan Group Of Institutions"
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:px-4 lg:mt-16">
              <p className="lg:w-3/3 w-full leading-relaxed text-gray-300 text-opacity-90">
                The world around us is constantly changing and we are aware that
                there are many challenges. <br />
                We have a talented,dedicated,caring team of staff ,each of whom
                works very hard to ensure that the abilities of the children in
                our care are nurtured and carefully developed.Today the quality
                of education is continuously scalingnew heights and new
                benchmarks. Education has become a very competitive sector
                excellence is the only thing that rules supreme here and the
                Sankat Mochan Group Of Institutions is committed to the same
                .Our school has taken a great leap in the quality of
                education.Teachers and students are empowered with skills and
                understanding to thrive in an interactive and information-rich
                learning enviornment through enhanced technology.Our amazing and
                dedicated faculty are to be commended for their zeal commitment,
                and dedicated service to our institution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

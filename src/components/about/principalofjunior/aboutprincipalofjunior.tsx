import dynamic from "next/dynamic";
const AboutProfile = dynamic(() => import("../aboutcard"));
export default function AboutVicePrincipalOfJunior() {
  return (
    <>
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 lg:px-4">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                About  Principal (Junior&lsquo;s Classes)
              </h1>
              <div className="h-1 w-20 bg-yellow-500 rounded" />
              <div className="flex mt-6">
                <AboutProfile
                  name="Mrs. Jyoti Singh"
                  role="Principal"
                  mobile={8960928977}
                  email="principalofjunior@smgoi.com"
                  image="/management/principalofjuniors.webp"
                  address=" Bhikupur ,Sultanpur ,Uttar Pradesh ,India ,Pin Code - 228142"
                  imgalt="Pricipal Of Sankat Mochan Group Of Institutions"
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:px-4 lg:mt-16">
              <p className="lg:w-3/3 w-full leading-relaxed text-gray-300 text-opacity-90">
                We firmly believe that the parents are their child&lsquo;s first
                and most important teachers. Parents play a vital role in the
                education of their children.We happily welcome all our parents
                to take an active role in thier children&lsquo;s education and be
                active participants in our school life. A School plays a crucial
                role in shaping a child&lsquo;s future.Not only does this include the
                provisionof education and ensuring learning,but molding the
                character,morals,and value system of the child as well. A school
                provides the foundation needed to view the world as a limitless
                space providing innumerable opportunities to shine. Your child
                is a very special individualwho needs a happy,secure,and
                challenging
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import dynamic from 'next/dynamic';
const AboutProfile = dynamic(() => import('../aboutcard'));

export default function AboutDirector() {
  return (
    <>
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 lg:px-4">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                About Director & Founder
              </h1>
              <div className="h-1 w-20 bg-yellow-500 rounded" />
              <div className="flex mt-6">
                <AboutProfile
                  name="Mr. Surendra Pratap Singh"
                  role="Director & Founder"
                  mobile={70079595565}
                  email="director@smgoi.com"
                  image="/management/director.webp"
                  address="kariya Bajhna, Sultanpur"
                  imgalt="Director Of Sankat Mochan Group Of Institutions"
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:px-4 lg:mt-8">
              <p className="lg:w-3/3 w-full leading-relaxed text-white text-lg text-opacity-90">Dear Parents/guardians and staff members</p>
              <p className="lg:w-3/3 w-full leading-relaxed text-gray-300 text-opacity-90">
                This is my great pleasure to inform you that we have founded the Sankat Mochan Group Of Institutions, Kariya Bajhna, Kurebhar - Sultanpur to enlighten young minds. This is not just a school but a platform to nurture excellence in every child. We are committed to providing every child an environment where their dreams can be flourished thinking process can be stimulated and their earning abilities can be awakened.
              </p>
              <p className="lg:w-3/3 w-full leading-relaxed text-gray-300 text-opacity-90">
                I take this occasion to congratulate the principal, staff, students, and parents for their strong sense of commitment, service, and responsibility that has transformed this institution into an outstanding and significant temple of learning today. Sankat Mochan Group Of Institutions has tried its best to excel in all departments of its student&lsquo;s growth. The specialty of this institute is that it has made quality education accessible to all, thanks to the highly motivated staff and the availability of quality infrastructure.
              </p>
              <p className="lg:w-3/3 w-full leading-relaxed text-gray-300 text-opacity-90">
                I pray that the Almighty God continues to bless this school as well as all the members of Sankat Mochan family, including the students, parents, and all those associated with this institution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

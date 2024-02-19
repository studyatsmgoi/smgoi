import dynamic from "next/dynamic";
const AboutProfile = dynamic(() => import("../aboutcard"));
export default function AboutManager() {
  return (
    <>
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 lg:px-4">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                About Manager
              </h1>
              <div className="h-1 w-20 bg-yellow-500 rounded" />
              <div className="flex mt-6">
                <AboutProfile
                  name="Mr. Rahul Maurya"
                  role="Manager"
                  mobile={8960788977}
                  email="manager@smgoi.com"
                  image="/management/manager.webp"
                  address="Chaure bazar,Ayodhya,Uttar Pradesh,India,Pin Code - 224209"
                  imgalt="Manager Of Sankat Mochan Group Of Institutions"
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:px-4 lg:mt-16">
              <p className="lg:w-3/3 w-full leading-relaxed text-gray-300 text-opacity-90">
                <q className="text-white text-md">
                  If our school is a pen, the parents are the ink,joining
                  together we can write the success story of educational
                  development of our children
                </q>{" "}
                <br />
                It&lsquo;s my honour and privilege to greet you all with warm and
                prayerful wishes.May the Almighty shower His abundent blessings
                upon each of you. Education aims not only to produce
                academicians but also to develop humane and sensitive citizens.
                At Sankat Mochan Group Of Institutions, we maintian a congenial
                learning environment while ensuring that children have enough
                opportunities to develop their personal and interpersonal
                skills. Primary and Secondary education plays a vital role in an
                individual&lsquo;s career and intellectual development. It works as a
                solid foundation for successful higher education and subsequent
                life stages. <br />
                Our teachers are well-qualified & share a passion for
                teaching,bringing out the best in themselves and their students.
                We edify our students in classical as well as contemporary
                models of learning while giving them a solid foundation in
                cultural insights. <br />
                We ourselves on creating a culture of learning where students
                are free to express or share their interest in a variety of
                fields while developing their character as well.With
                extra-curricular classes, a strong emphasis on communication
                skills ,and activities meant to foster cultural understanding,
                the students at our school emerges as elucidated and responsible
                citizen of the world. <br />
                I wish you all the best to all of you and thank you to be a part of the Sankat Mochan group of the Institutions Family.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

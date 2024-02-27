import dynamic from "next/dynamic";
const TeacherProfile = dynamic(() => import("../teacherprofile"));
export default function ComputerScienceDepartment() {
  return (
    <>
      <section className="text-gray-400 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                Department Of Computer Science
              </h1>
              <div className="h-1 w-20 bg-yellow-500 rounded" />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-white text-opacity-90">
              At the heart of innovation and excellence, our Department of
              Computer Science is dedicated to fostering a dynamic learning
              environment where students embark on a journey of exploration and
              discovery. As a vital pillar within Sankat Mochan Group of
              Institutions, we strive to empower our students with cutting-edge
              knowledge and practical skills, preparing them for the
              ever-evolving world of technology.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <TeacherProfile
                  name="Hari Om Narayan"
                  role="Assistant Teacher"
                  image="/departments/computerscience/hariom.webp"
                  bio="Introducing Hari Om Narayan, our dynamic computer science pedagogue, igniting student passion with avant-garde methods to excel in technology."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

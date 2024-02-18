import dynamic from 'next/dynamic';
const TeacherProfile = dynamic(() => import('../teacherprofile'));
export default function ScienceDepartment() {
    return (
        <>
        <section className="text-gray-400 body-font ">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
          Department Of Science
        </h1>
        <div className="h-1 w-20 bg-yellow-500 rounded" />
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-white text-opacity-90">
      At the heart of academic excellence, the Department of Science is committed to fostering a dynamic and innovative learning environment. Our dedicated faculty members are passionate about nurturing the next generation of scientists, thinkers, and innovators.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <TeacherProfile name="Usman Khan"
            role="Assistant Teacher"
            image="/departments/science/usman.webp"
            bio="Usman Khan, passionate Science Assistant Teacher at Sankat Mochan. Inspiring curiosity, fostering learning, and shaping well-rounded individuals with expertise for the future." />
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
         <TeacherProfile name="Sunita Yadav"
            role="Assistant Teacher"
            image="/departments/science/sunita.webp"
            bio="Sunita Yadav, adept Science Assistant Teacher at Sankat Mochan Group Of Institutions, instills scientific curiosity and critical thinking skills in students." />
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
         <TeacherProfile name="Sakshi"
            role="Assistant Teacher"
            image="/departments/science/sakshi.webp"
            bio="Sakshi, proficient Science Assistant Teacher at Sankat Mochan Group Of Institutions, inspires students with scientific knowledge and hands-on learning experiences." />
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
         <TeacherProfile name="Anjali Vishwakarma"
            role="Assistant Teacher"
            image="/departments/science/anjali.webp"
            bio="Anjali Vishwakarma, skilled Science Assistant Teacher at Sankat Mochan Group Of Institutions, fosters scientific inquiry and analytical thinking in students." />
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    );
}
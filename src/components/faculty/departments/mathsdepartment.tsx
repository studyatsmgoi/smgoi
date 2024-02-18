import dynamic from 'next/dynamic';
const TeacherProfile = dynamic(() => import('../teacherprofile'));
export default function MathsDepartment() {
    return (
        <>
        <section className="text-gray-400 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
          Department Of Mathematics
        </h1>
        <div className="h-1 w-20 bg-yellow-500 rounded" />
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-white text-opacity-90">
      At Sankat Mochan Group Of Institutions, our Department of Mathematics is committed to fostering a dynamic learning environment that inspires critical thinking and intellectual growth. Our dedicated faculty members bring a wealth of expertise, passion, and experience to the world of mathematics education.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <TeacherProfile name="Arun Dubey"
            role="Assistant Teacher"
            image="/departments/mathematics/arun.webp"
            bio="Arun Dubey, skilled Mathematics Assistant Teacher at Sankat Mochan Group Of Institutions, imparts mathematical expertise and cultivates problem-solving skills in students." />
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
         <TeacherProfile name="Shiv Kumar"
            role="Assistant Teacher"
            image="/departments/mathematics/shivkumar.webp"
            bio="Shiv Kumar, skilled assistant teacher, enriches Sankat Mochan's Mathematics Department with expertise." />
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <TeacherProfile name="Pammi"
            role="Assistant Teacher"
            image="/departments/mathematics/pammi.webp"
            bio="Pammi, proficient Mathematics Assistant Teacher at Sankat Mochan Group Of Institutions, nurtures mathematical prowess and facilitates conceptual clarity for students." />
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    );
}
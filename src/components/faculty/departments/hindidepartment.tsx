import dynamic from 'next/dynamic';
const TeacherProfile = dynamic(() => import('../teacherprofile'));
export default function HindiDepartment() {
    return (
        <>
        <section className="text-gray-400 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
          Department Of Hindi
        </h1>
        <div className="h-1 w-20 bg-yellow-500 rounded" />
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-white text-opacity-90">
      Welcome to the Department of Hindi at Sankat Mochan Group of Institutions, where we take pride in promoting the rich cultural and linguistic heritage of our nation. Our department is committed to fostering a deep understanding and appreciation for the Hindi language, literature, and culture.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <TeacherProfile name="Sunil"
            role="Assistant Teacher"
            image="/departments/hindi/sunil.webp"
            bio="Sunil, dedicated assistant teacher at Sankat Mochan Group of Institutions, excels in Hindi, bringing expertise and passion to students." />
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
         <TeacherProfile name="Satyaveer"
            role="Assistant Teacher"
            image="/departments/hindi/satyaveer.webp"
            bio="Satyaveer, proficient Hindi Assistant Teacher at Sankat Mochan Group Of Institutions, enriches students with linguistic skills and cultural understanding." />
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <TeacherProfile name="Pratiksha"
            role="Assistant Teacher"
            image="/departments/hindi/pratiksha.webp"
            bio="Pratiksha, proficient assistant teacher in Hindi at Sankat Mochan Group of Institutions, enriches students with language skills and cultural understanding." />
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
         <TeacherProfile name="Renu"
            role="Assistant Teacher"
            image="/departments/hindi/renu.webp"
            bio="Renu, skilled Hindi Assistant Teacher at Sankat Mochan Group Of Institutions, imparts language proficiency and cultural appreciation to students." />
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    );
}
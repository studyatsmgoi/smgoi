import dynamic from 'next/dynamic';
const TeacherProfile = dynamic(() => import('../teacherprofile'));
export default function EnglishDepartment() {
    return (
        <>
        <section className="text-gray-400 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
          Department Of English
        </h1>
        <div className="h-1 w-20 bg-yellow-500 rounded" />
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-white text-opacity-90">
      Welcome to the Department of English at Sankat Mochan Group of Institutions, where we strive to cultivate a rich and dynamic learning environment for our students. Our commitment is to empower individuals with the skills and knowledge necessary for effective communication, critical thinking, and a deep appreciation for the English language.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <TeacherProfile name="Shailesh Kumar Pal"
            role="Assistant Proffessor"
            image="/departments/english/shailesh.webp"
            bio="Shailesh , skilled assistant proffessor, enriches Sankat Mochan's English Department with expertise, fostering a dynamic and inspiring learning environment." />
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
         <TeacherProfile name="Archana Srivastava"
            role="Assistant Teacher"
            image="/departments/english/archana.webp"
            bio="Meet Archana Srivastava, an esteemed assistant teacher at Sankat Mochan Group of Institutions. Her dedication to education illuminates minds and shapes the future with passion and expertise." />
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
         <TeacherProfile name="Nimi"
            role="Assistant Teacher"
            image="/departments/english/nimi.webp"
            bio="Nimi, adept English Assistant Teacher at Sankat Mochan Group Of Institutions, fosters language proficiency and inspires students with enthusiasm." />
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <TeacherProfile name="Ankit"
            role="Assistant Teacher"
            image="/departments/english/ankit.webp"
            bio="Ankit, a qualified assistant teacher, enhances the English Department at Sankat Mochan with expertise, passion, and a commitment to excellence." />
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <TeacherProfile name="Jaya"
            role="Assistant Teacher"
            image="/departments/english/jaya.webp"
            bio="Jaya, skilled English Assistant Teacher at Sankat Mochan Group Of Institutions, cultivates language proficiency and fosters a love for literature." />
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <TeacherProfile name="Akansha"
            role="Assistant Teacher"
            image="/departments/english/akansha.webp"
            bio="Akansha, accomplished English Assistant Teacher at Sankat Mochan Group Of Institutions, nurtures language skills and fosters literary appreciation in students." />
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <TeacherProfile name="Khusi Singh"
            role="Assistant Teacher"
            image="/departments/english/khusi.webp"
            bio="Khushi Singh, skilled English Assistant Teacher at Sankat Mochan Group Of Institutions, enriches students with language proficiency and literary appreciation." />
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    );
}
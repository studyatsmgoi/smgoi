import dynamic from 'next/dynamic';
const TeacherProfile = dynamic(() => import('../teacherprofile'));
export default function SSTDepartment() {
    return (
        <>
        <section className="text-gray-400 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
        Department of Social Studies (S.ST.)
        </h1>
        <div className="h-1 w-20 bg-yellow-500 rounded" />
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-white text-opacity-90">
      At Sankat Mochan Group Of Institutions, our Department of Social Studies (S.ST.) is dedicated to fostering a deep understanding of history, geography, civics, and related disciplines. We believe in providing a holistic educational experience that empowers students to explore the rich tapestry of human civilization and society.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <TeacherProfile name="Pramod"
            role="Assistant Teacher"
            image="/departments/socialstudies/pramod.webp"
            bio="Pramod, adept assistant teacher in Social Studies at Sankat Mochan Group of Institutions, imparts knowledge with enthusiasm and skill." />
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
         <TeacherProfile name="Archana Srivastav"
            role="Assistant Teacher"
            image="/departments/socialstudies/archana.webp"
            bio="Archana Srivastav, accomplished assistant teacher in Social Studies at Sankat Mochan Group of Institutions, fosters critical thinking and global awareness." />
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <TeacherProfile name="Ankit"
            role="Assistant Teacher"
            image="/departments/socialstudies/ankit.webp"
            bio="Ankit, skilled assistant teacher in Social Studies at Sankat Mochan Group of Institutions, enhances students' understanding of diverse cultures and societies." />
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
         <TeacherProfile name="Pammi"
            role="Assistant Teacher"
            image="/departments/socialstudies/pammi.webp"
            bio="Pammi, skilled Social Studies Assistant Teacher at Sankat Mochan Group Of Institutions, imparts historical and societal knowledge with enthusiasm." />
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    );
}
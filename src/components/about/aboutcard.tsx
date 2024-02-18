import Image from "next/image";

interface AboutProfileProps {
    name: string;
    role: string;
    image: string;
    mobile: number;
    email:string;
    address: string;
    imgalt:string;
  }
  
  const AboutProfile: React.FC<AboutProfileProps> = ({ 
    name, 
    role,
    image,
    mobile,
    email,
    address,
    imgalt 
  }) => {
  
    return (
      <div className="w-full p-2">
      <div className="flex justify-center items-center h-full">
        <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg w-full max-w-md">
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
           <div className="w-32 h-32 md:w-32 md:h-32 mb-4 flex items-center justify-center object-cover object-center rounded-full border-4 border-yellow-500 mx-auto">
            <Image
              src={image}
              width={120}
              height={120}
              alt={imgalt}
            />
            </div>
            <h2 className="text-xl font-medium text-gray-900 title-font mb-2">{name}</h2>
            <p className="leading-relaxed text-base text-yellow-800 font-md">{role}, Sankat Mochan Group Of Institutions</p>
            <p className="leading-relaxed text-base mt-2 text-gray-900">Mobile: +91 {mobile}</p>
            <p className="leading-relaxed text-base text-gray-900">Email: {email}</p>
            <p className="leading-relaxed text-base text-gray-900">Address: {address}</p>
          </div>
        </div>
      </div>
    </div>
    );
  }
  export default AboutProfile;
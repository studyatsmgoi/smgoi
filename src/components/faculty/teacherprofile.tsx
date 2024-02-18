import Image from "next/image";

interface TeacherProfileProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeacherProfile: React.FC<TeacherProfileProps> = ({
  name,
  role,
  image,
  bio,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <Image
        src={image}
        alt={name}
        className="rounded mx-auto mb-4"
        width={90}
        height={90}
        loading="lazy"
      />

      <h2 className="text-lg font-medium text-center mb-2 text-gray-900">
        {name}
      </h2>

      <p className="text-gray-900 font-medium text-sm text-center mb-4">
        {role}
      </p>

      <p className="text-gray-900 font-medium">{bio}</p>
    </div>
  );
};

export default TeacherProfile;

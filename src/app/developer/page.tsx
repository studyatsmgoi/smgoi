// pages/index.tsx
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:{
    absolute:"About Our Developer | Sankat Mochan Group Of Institutions | Sultanpur | Uttar Pradesh (U.P.)",
  }
};
const SocialMediaIcons = () => {
  // Add your social media links here
  const socialMediaLinks = [
    {
      name: "Facebook",
      icon: "facebook.svg",
      link: "https://www.facebook.com/beeamitpal",
    },
    {
      name: "Instagram",
      icon: "instagram.svg",
      link: "https://instagram.com/beamitpal",
    },
    {
      name: "Thread",
      icon: "thread.svg",
      link: "https://threads.net/beamitpal",
    },
    {
      name: "Youtube",
      icon: "youtube.svg",
      link: "https://youtube.com/@beamitpal",
    },
    {
      name: "Twitter",
      icon: "twitter.svg",
      link: "https://twitter.com/beamitpal",
    },
    {
      name: "Website",
      icon: "website.svg",
      link: "https://beamitpal.com/",
    },
  ];

  return (
    <div className="flex justify-center items-center mt-4 gap-4">
      {socialMediaLinks.map((social) => (
        <Link key={social.name} href={social.link}>
          <Image
            src={`/social/${social.icon}`}
            alt={social.name}
            width={24}
            height={24}
          />
        </Link>
      ))}
    </div>
  );
};

const developer: React.FC = () => {
  return (
    <>
    <div className="container mx-auto p-8">
      <div className="text-center mb-4 grid lg:grid-cols-2">
        <Card className="h-auto w-auto m-2 flex justify-center rounded-lg items-center bg-red-500">
          <CardContent className="mt-4">
            <div className="rounded-full overflow-hidden w-24 h-24 mx-auto mb-2">
              <Image
                src="/developer/developer.webp"
                alt="Profile Image"
                width={100}
                height={100}
              />
            </div>
            <h1 className="text-4xl font-bold text-white">Amit</h1>
            <h1 className="text-2xl font-bold text-white">
              Software Developer
            </h1>
            <p className="text-black font-medium">
              Meet Amit, a versatile Software Developer with expertise in
              Android, Windows, and Linux application development. As a skilled
              professional, Amit excels in crafting innovative solutions for
              diverse platforms, ensuring seamless user experiences. Explore
              Amit&lsquo;s profile for a journey through the world of software
              development, where creativity meets precision to bring your
              digital visions to life.
            </p>

            <SocialMediaIcons />
          </CardContent>
        </Card>
        <Card className="h-auto w-auto bg-red-500 rounded-lg m-2">
          <CardContent>
            <div className="flex flex-col items-center justify-center h-screen bg-red-500 text-black">
              <h1 className="text-4xl font-bold text-white">About Me</h1>
              <p className="text-center font-medium">
                Hello, I&lsquo;m a coding enthusiast with a penchant for turning lines
                of code into meaningful and impactful software. My journey as a
                Software Developer is a fusion of curiosity, problem-solving,
                and a deep love for elegant solutions. Specializing in Android,
                Windows, and Linux application development, I thrive on the
                challenge of creating seamless user experiences across diverse
                platforms. As a dedicated professional, I don&lsquo;t just write code;
                I craft digital experiences that transcend expectations. Dive
                into my profile to embark on a voyage through the dynamic world
                of software development, where every line of code is a
                brushstroke, and every project is an art form. Join me in
                bringing your digital visions to life, where creativity dances
                in harmony with precision.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
};

export default developer;

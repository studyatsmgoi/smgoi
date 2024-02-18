import Image from "next/image";

interface DeskProfile {
  who: string;
  quote: string;
  image: string;
  name: string;
  role: string;
  bgcolor: string;
}

const Desk: React.FC<DeskProfile> = ({
  who,
  quote,
  image,
  name,
  role,
  bgcolor,
}) => {
  return (
    <section className={`relative py-28 ${bgcolor} overflow-hidden`}>
      <div className="relative z-5 max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center relative z-5">
          <h3 className="text-blue-100 font-semibold pb-6 relative z-5">{who}</h3>
          <figure>
            <blockquote>
              <p className="text-white text-xl font-semibold sm:text-2xl relative z-5">
                “{quote}“
              </p>
            </blockquote>
            <div className="mt-6 relative z-5">
              <Image
                src={image}
                className="mx-auto rounded-full"
                width={80}
                height={80}
                alt="profile"
              />
              <div className="mt-3">
                <span className="block text-white font-semibold">{name}</span>
                <span className="block text-blue-100 text-sm mt-0.5">{role}</span>
              </div>
            </div>
          </figure>
        </div>
      </div>
      <div className={`absolute inset-0 bg-${bgcolor} opacity-75`} />
    </section>
  );
};

export default Desk;


import Image from "next/image";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const Introduction = ({ darkMode }) => {
  return (
    <section className="text-center mt-20">
      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden md:h-96 md:w-96 shadow-lg transition-transform hover:scale-105">
        <Image 
          src="/mypic.jpg" 
          fill={true} 
          style={{ objectFit: "cover" }}
          alt="Developer Illustration" 
        />
      </div>
      <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
        Jeevithdharanish
      </h2>
      <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
        Software Developer and Engineer.
      </h3>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
        I am a student who is interested in building software tools.
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <AiFillTwitterCircle />
        <AiFillLinkedin />
        <AiFillYoutube />
      </div>
    </section>
  );
};

export default Introduction;

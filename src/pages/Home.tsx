import { ArrowUpRight, HandIcon } from "lucide-react";
import { motion } from "framer-motion";
import CustomButton from "../components/CustomButton";

const Home = () => {
  return (
    <main>
      <section className="flex justify-center items-center h-[100vh]">
        <div className="w-[100%] md:w-[80%] mx-4 lg:mx-auto font-dmSans ">
          <motion.p className="flex gap-2 mb-4">
            <span className="text-purple-500">
              <HandIcon />
            </span>
            Hey, I am Dolen Deori
          </motion.p>
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-800 to-purple-600 lg:w-[60%] md:w-[70%] ">
            I Build Scalable Digital Experiences That Deliver Real Impact.
          </h1>

          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 lg:gap-8 mt-4 lg:mt-8 ">
            <div className="lg:flex-1 bg-gray-200 h-[1px] w-full"></div>
            <p className="lg:flex-1 text-md">
              I’m a developer focused on building reliable, thoughtful digital
              experiences that are simple, effective, and built to last.
            </p>
          </div>

          <div className="flex justify-between items-center mt-8">
            <div className="hidden lg:flex flex-1 justify-start items-center gap-3 text-gray-800">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center"
              >
                LINKEDIN
                <span>
                  <ArrowUpRight size={20} />
                </span>
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center"
              >
                GITHUB
                <span>
                  <ArrowUpRight size={20} />
                </span>
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center"
              >
                INSTAGRAM
                <span>
                  <ArrowUpRight size={20} />
                </span>
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center"
              >
                GMAIL
                <span>
                  <ArrowUpRight size={20} />
                </span>
              </a>
            </div>
            <div className="flex flex-1 gap-4 pl-0 lg:pl-8">
              <CustomButton name="My Work" animation={true} />
              <CustomButton name="Know me better" animation={true} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

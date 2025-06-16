import { ArrowUpRight, HandIcon, MailIcon, SparkleIcon } from "lucide-react";
import { motion } from "framer-motion";
import CustomButton from "../components/CustomButton";
import Marquee from "react-fast-marquee";
import { images } from "../constants";

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
          <h1>
            I Build Saclable Digital Experiences That Deliver Real Impact.
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
              <CustomButton name="My Work" bgVarient="secondary" />
              <CustomButton name="Know me better" bgVarient="primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Marqeee section */}
      <section className="py-8">
        <Marquee
          autoFill={true}
          gradient={true}
          gradientColor="#fff"
          className="-z-1 overflow-hidden opacity-20"
        >
          <p className="mx-8 font-bold text-5xl font-dmSans">
            Software Developer
          </p>
          <p className="mx-8 font-bold text-5xl font-dmSans">Shopify</p>
          <p className="mx-8 font-bold text-5xl font-dmSans">
            Graphics Designing
          </p>
        </Marquee>
      </section>

      {/* About section */}
      <section className="text-center my-24 font-dmSans w-[100%] lg:w-[60%] lg:mx-auto flex flex-col justify-center items-center">
        <div className="relative">
          <img
            src={images.code_circle}
            className="absolute -left-15 -z-1"
            alt=""
          />
          <div className="relative -z-1">
            <div className=" absolute h-[70%] bottom-0 left-0 bg-linear-to-t from-white 50% to-transparent 100% w-full"></div>
            <img
              src={images.dolendeori_image}
              alt=""
              className="h-60 rounded-t-[4rem]"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-center items-center gap-2 text-purple-600">
            <SparkleIcon size={20} />
            <p className="font-semibold uppercase">ABOUT ME</p>
          </div>
          <h2 className="mt-4">
            I'm Dolen Ch. Deori, a Software Developer from India with a strong
            passion for web technologies. I focus on building clean, responsive,
            and efficient web and mobile applications that deliver real value.
          </h2>
        </div>
        <div className="flex justify-center items-center gap-2 mt-6">
          <a href="#" className="p-2.5 border rounded-full">
            <MailIcon size={20} />
          </a>
          <CustomButton name="Get in touch" bgVarient="primary" />
        </div>
      </section>
    </main>
  );
};

export default Home;

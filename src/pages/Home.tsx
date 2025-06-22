// * Importing Modules.
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

// * Importing Components
import CustomButton from "../components/CustomButton";
import Slider from "../components/Slider";

// * Other Imports.
import { ArrowUpRight, HandIcon, MailIcon, SparkleIcon } from "lucide-react";
import { images, projects, services, skills, testimonials } from "../constants";

const Home = () => {
  return (
    <main>
      <section className="flex justify-center items-center h-[100vh] py-0 my-0 lg:w-[100%]">
        <div className="w-[100%] md:w-[80%] mx-4 lg:mx-auto font-dmSans ">
          <motion.p className="flex gap-2 mb-4 items-center">
            <motion.span
              className="text-purple-500 origin-bottom"
              animate={{ rotate: [10, -10, 10, -10, 0] }}
              transition={{
                repeat: Infinity,
                repeatDelay: 2,
                duration: 1,
                ease: "easeInOut",
              }}
            >
              <HandIcon />
            </motion.span>
            Hey, I am Dolen Deori
          </motion.p>
          <h1 className="w-full lg:w-[60%]">
            I Build Saclable Digital Experiences That Deliver Real Impact
            <span className="text-purple-600">.</span>
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
              <CustomButton
                btnLink="/projects"
                name="My Work"
                bgVarient="secondary"
              />
              <CustomButton
                btnLink="/contact"
                name="Contact me"
                bgVarient="primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marqeee section */}
      <section className="w-[100%]">
        <Marquee
          autoFill={true}
          gradient={true}
          gradientColor="#fff"
          className="-z-1 overflow-hidden opacity-20"
        >
          <p className="mx-8 font-bold text-6xl font-dmSans">
            Software Developer
          </p>
          <p className="mx-8 font-bold text-6xl font-dmSans">Web Developer</p>
          <p className="mx-8 font-bold text-6xl font-dmSans">Shopify</p>
          <p className="mx-8 font-bold text-6xl font-dmSans">
            Graphics Designing
          </p>
        </Marquee>
      </section>

      {/* About section */}
      <section className="text-center flex flex-col justify-center items-center">
        <div className="relative">
          <div className="relative -z-1">
            <div className=" absolute h-[70%] bottom-0 left-0 bg-linear-to-t from-white 50% to-transparent 100% w-full"></div>
            <img
              src={images.dolendeori_image}
              alt={`Dolen Deori image`}
              className="h-60 rounded-t-[4rem]"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-center items-center gap-2 text-purple-600">
            <SparkleIcon />
            <p className="uppercase font-archivo font-medium text-lg">
              ABOUT ME
            </p>
          </div>
          <h3 className="mt-4">
            I'm Dolen Ch. Deori, a Software Developer from India with a strong
            passion for web technologies. I focus on building clean, responsive,
            and efficient web and mobile applications that deliver real value.
          </h3>
        </div>
        <div className="flex justify-center items-center gap-2 mt-6">
          <CustomButton
            btnLink="mailto:dolendeori@gmail.com"
            icon={<MailIcon size={20} />}
          ></CustomButton>
          <CustomButton
            btnLink="/contact"
            name="Get in touch"
            bgVarient="primary"
          />
        </div>
      </section>

      {/* Prjects Section  */}
      <section>
        <div>
          <p className="flex items-center gap-2 text-primary font-archivo font-medium text-lg">
            <span>
              <SparkleIcon />
            </span>
            PROJECTS
          </p>
          <h2 className="mt-2">Selected Projects</h2>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-8">
          {projects.map((items, i) => (
            <div key={i}>
              <div className="py-12 bg-neutral-100 flex justify-center items-center rounded-3xl">
                <img
                  src={items.banner}
                  className="h-80 rounded-2xl"
                  alt={`${items.title} banner image by Dolen Deori`}
                />
              </div>
              <div className="flex justify-between items-end mt-2">
                <div>
                  <p className="text-lg font-semibold">{items.title}</p>
                  <p className="text-dark/70">{items.type}</p>
                </div>
                <div>
                  <p className="text-sm text-dark/70">{items.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <CustomButton name="View All Projects" />
        </div>
      </section>

      {/* services section */}
      <section>
        <div>
          <p className="flex justify-start items-center text-purple-600 font-archivo font-medium gap-2">
            <span>
              <SparkleIcon />
            </span>
            SPECIALITY
          </p>
          <h2 className="mt-2">Skills and Services</h2>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-linear-60 from-neutral-200 to bg-neutral-100 p-4 rounded-2xl"
            >
              <p className="font-archivo font-semibold text-xl">
                {service.service}
              </p>
              <p className="mt-2">{service.desc}</p>
            </div>
          ))}
        </div>

        <Marquee
          autoFill={true}
          gradient={true}
          gradientColor="#fff"
          className="-z-1"
        >
          {skills.map((skill, i) => (
            <div
              key={i}
              className="flex justify-center items-center gap-2 mx-2 bg-neutral-200 p-1.5 px-4 rounded-full mt-10"
            >
              <img
                src={skill.icon}
                alt={`${skill.skill}'s icon`}
                className="h-5"
              />
              <p className="text-sm">{skill.skill}</p>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Testimonials Section */}
      <section>
        <div className="text-center">
          <p className="flex justify-center items-center text-purple-600 font-archivo font-medium text-lg gap-2">
            <span className="">
              <SparkleIcon />
            </span>
            TESTIMONIALS
          </p>
          <h2 className="mt-2">What Others Say</h2>
        </div>

        <div className="mt-4">
          <Slider testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="my-0 pb-4">
        <div className="bg-neutral-200 p-8 rounded-3xl">
          <div className="bg-green-300 p-1.5 px-4 w-fit rounded-full flex justify-center items-center gap-3">
            <div className="h-1.5 w-1.5 bg-green-950 rounded-full"></div>
            <p className="text-sm font-medium">Available for work</p>
          </div>
          <h3 className="mt-4">
            Ready to build something <br /> amazing together?
          </h3>
          <p>Let’s turn your ideas into reality.</p>

          <div className="flex justify-end mt-4">
            <div className="text-right">
              <CustomButton
                name="Contact me"
                bgVarient="primary"
                btnLink="/contact"
              />
              <p className="mt-2">
                Or you can reach out to me at{" "}
                <a href="mailto:dolendeori@gmail.com" className="underline">
                  dolendeori@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

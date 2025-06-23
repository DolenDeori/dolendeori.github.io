import { MoonIcon, SunIcon } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Navigation = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <nav className="w-full p-2 py-2 bg-gradient-to-b from-white to-transparent md:border-b-gray-300 fixed top-0 left-0">
      <div className="flex justify-between items-center w-[80%] mx-auto z-10">
        <div>
          <Link to="/">DOLEN.</Link>
        </div>
        <div>
          <div
            onClick={() => {
              setDarkMode(!darkMode);
            }}
            className="cursor-pointer text-dark p-3 bg-gray-100/50 rounded-full backdrop-blur-2xl overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {darkMode ? (
                <motion.span
                  key="moon"
                  className="block"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ type: "spring", duration: 0.4 }}
                >
                  <MoonIcon size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="sun"
                  className="block"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ type: "spring", duration: 0.4 }}
                >
                  <SunIcon size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

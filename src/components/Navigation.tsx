import { MoonIcon, SunIcon } from "lucide-react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useThemeStore } from "../store/themeStore";

const Navigation = () => {
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme.theme === "dark";
  return (
    <nav
      className={`w-full p-2 py-2 bg-gradient-to-b ${
        isDark ? "from-primary-dark text-white" : "from-white"
      } to-transparent md:border-b-gray-300 fixed top-0 left-0 z-10`}
    >
      <div className="flex justify-between items-center w-[80%] mx-auto">
        <div>
          <Link to="/">DOLEN.</Link>
        </div>
        <div>
          <div
            onClick={() => {
              toggleTheme();
            }}
            className="cursor-pointer text-dark p-3 bg-gray-100/50 rounded-full backdrop-blur-2xl overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {theme.theme === "dark" ? (
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

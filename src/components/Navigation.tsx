import { SunIcon } from "lucide-react";
import { Link } from "react-router";

const Navigation = () => {
  return (
    <nav className="w-full p-2 py-4 bg-gradient-to-b from-white to-transparent md:border-b-gray-300 overflow-hidden fixed">
      <div className="flex justify-between items-center w-[80%] mx-auto z-10">
        <div>
          <Link to="/">DOLEN.</Link>
        </div>
        <div>
          <div className="cursor-pointer">
            <SunIcon color="black" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

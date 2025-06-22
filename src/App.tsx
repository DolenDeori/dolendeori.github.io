// * Importing Modules.
import { Route, Routes } from "react-router";
import LocomotiveScroll from "locomotive-scroll";

// * Importing Components.
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Dock from "./components/Dock";
import Footer from "./components/Footer";

// * Other Imports.
import { HomeIcon, LayoutGridIcon, SendIcon, SmileIcon } from "lucide-react";

const items = [
  {
    icon: <HomeIcon size={18} />,
    label: "Home",
    link: "/",
  },
  {
    icon: <SmileIcon size={18} />,
    label: "About",
    link: "/about",
  },
  {
    icon: <LayoutGridIcon size={18} />,
    label: "Projects",
    link: "/projects",
  },
  {
    icon: <SendIcon size={18} />,
    label: "Contact",
    link: "/contact",
  },
];

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
        className="cursor-pointer"
      />
      {/* Footer Area */}
      <Footer />
    </>
  );
}

export default App;

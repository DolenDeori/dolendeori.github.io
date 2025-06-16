import { Route, Routes } from "react-router";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Dock from "./components/Dock";
import { HomeIcon, LayoutGridIcon, SendIcon, SmileIcon } from "lucide-react";
import LocomotiveScroll from "locomotive-scroll";

const items = [
  {
    icon: <HomeIcon size={18} />,
    label: "Home",
    onClick: () => alert("Home!"),
  },
  {
    icon: <SmileIcon size={18} />,
    label: "About",
    onClick: () => alert("Archive!"),
  },
  {
    icon: <LayoutGridIcon size={18} />,
    label: "Projects",
    onClick: () => alert("Profile!"),
  },
  {
    icon: <SendIcon size={18} />,
    label: "Contact",
    onClick: () => alert("Settings!"),
  },
];

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Navigation />
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
        className="cursor-pointer"
      />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;

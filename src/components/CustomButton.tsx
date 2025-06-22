import { useNavigate } from "react-router";
import type { CustomButtonProps } from "../types/type";

// custom function to set differnt style for button
const setBgVarient = (bgVarient: string) => {
  switch (bgVarient) {
    case "primary":
      return "bg-radial-[at_50%_80%] from-purple-700 to-purple-500 text-white";

    default:
      return "border-1";
  }
};

const CustomButton = ({
  name,
  btnLink,
  bgVarient = "secondary",
  icon,
}: CustomButtonProps) => {
  const navigation = useNavigate();

  // Function to handle navigation when cliking a button.
  const handleNavigation = (navLink: string) => {
    navigation(navLink);
  };

  return (
    <>
      {icon ? (
        <a href={`${btnLink}`} className="p-3 rounded-full border-1">
          {icon}
        </a>
      ) : (
        <button
          className={`py-2.5 px-8 ${setBgVarient(bgVarient)} `}
          onClick={() => handleNavigation(btnLink!)}
        >
          <span>{name}</span>
        </button>
      )}
    </>
  );
};

export default CustomButton;

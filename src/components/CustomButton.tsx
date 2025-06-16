import { motion } from "motion/react";

interface ButtonProps {
  name: string;
  bgVarient: "primary" | "secondary";
  textVarient?: string;
}

const setBtnVarient = (bgVarient: string) => {
  switch (bgVarient) {
    case "primary":
      return "bg-radial-[at_50%_90%] from-purple-700 0% to-purple-500 100% text-white";

    default:
      return "border border-black text-black";
  }
};

const CustomButton = ({
  name,
  bgVarient = "secondary",
  textVarient,
}: ButtonProps) => {
  return (
    <>
      <motion.button
        className={`px-6 py-2 cursor-pointer rounded-full ${setBtnVarient(
          bgVarient
        )}`}
      >
        {name}
      </motion.button>
    </>
  );
};

export default CustomButton;

import { motion } from "motion/react";

interface ButtonProps {
  name: string;
  bgVarient?: string;
  textVarient?: string;
  animation?: boolean;
}
const CustomButton = ({
  name,
  bgVarient,
  textVarient,
  animation,
}: ButtonProps) => {
  return (
    <>
      {animation && (
        <motion.button className="px-6 py-2 border border-black cursor-pointer rounded-full">
          {name}
        </motion.button>
      )}
    </>
  );
};

export default CustomButton;

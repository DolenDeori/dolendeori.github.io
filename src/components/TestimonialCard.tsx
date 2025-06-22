import { motion } from "motion/react";

declare interface TestimonialCardProps {
  message: string;
  name: string;
  company: string;
  profile: string;
  className: string;
  isActive?: boolean;
}

const TestimonialCard = ({
  message,
  name,
  company,
  profile,
  className,
  isActive,
}: TestimonialCardProps) => {
  const radius = 35;
  const stroke = 3;
  const circumference = 2 * Math.PI * radius;
  
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center text-center text-lg ${className}`}
      >
        <p>{message}</p>
        <div className="flex gap-4 items-center justify-center mt-8">
          <div className="p-2 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex justify-center items-center">
              {isActive && (
                <svg
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <motion.circle
                    cx="38"
                    cy="50"
                    r={radius}
                    stroke="#3498db"
                    strokeWidth={stroke}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{
                      duration: 6,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  />
                </svg>
              )}
            </div>
            <img
              src={profile}
              alt={`${name}'s profile image`}
              className="h-15 rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center items-start">
            <p className="text-lg font-semibold">{name}</p>
            <p className="text-sm">{company}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;

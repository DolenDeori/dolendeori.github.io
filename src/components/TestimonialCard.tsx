declare interface TestimonialCardProps {
  message: string;
  name: string;
  company: string;
  profile: string;
  className: string;
}

const TestimonialCard = ({
  message,
  name,
  company,
  profile,
  className,
}: TestimonialCardProps) => {
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center text-center text-lg ${className}`}
      >
        <p>{message}</p>
        <div className="flex gap-4 items-center justify-center mt-8">
          <div className="border-3 border-neutral-400 rounded-full p-0.5">
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

import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="lg:w-[80%] lg:mx-auto mb-16 flex justify-between items-center">
      <p>© 2025 Dolen Deori. All rights reserved. </p>
      <div className="flex justify-center items-center gap-6">
        <a href="#" className="p-2 bg-gray-100 rounded-full">
          <LinkedinIcon size={20} />
        </a>
        <a href="#" className="p-2 bg-gray-100 rounded-full">
          <GithubIcon size={20} />
        </a>
        <a href="#" className="p-2 bg-gray-100 rounded-full">
          <InstagramIcon size={20} />
        </a>
        <a href="#" className="p-2 bg-gray-100 rounded-full">
          <TwitterIcon size={20} />
        </a>
        <a href="#" className="p-2 bg-gray-100 rounded-full">
          <MailIcon size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

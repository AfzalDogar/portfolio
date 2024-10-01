import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/AfzalDogar",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/hafiz-muhammad-afzal/",
  },
  //   {
  //     icon: <FaYoutube />,
  //     path: "",
  //   },
  //   {
  //     icon: <FaTwitter />,
  //     path: "",
  //   },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link href={social.path} key={index} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

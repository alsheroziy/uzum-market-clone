import { Link } from "react-router-dom";

interface IProps {
  link: string;
  src: string;
}

export const Banner = ({ link, src }: IProps) => {
  return (
    <Link
      to={link}
      className="overflow-hidden rounded-md  block mt-4"
    >
      <img src={src} alt="banners" className="hover:scale-105 transition " />
    </Link>
  );
};

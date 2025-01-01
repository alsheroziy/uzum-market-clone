import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IProps {
	icon: ReactNode;
	title: string;
	link: string;
}

export default function HeaderLink({icon, link, title}: IProps) {
  return <Link to={link} className="flex items-center gap-2 hover:bg-gray-300 px-2 py-3 rounded-md">{icon}{title}</Link>
}

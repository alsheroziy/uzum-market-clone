import { Link } from "react-router-dom";

interface IProps{
	link: string;
	src: string;
}

export default function Banner({link, src}: IProps) {
  return (
	<Link to={link} className="overflow-hidden rounded-md max-w-[1240px] w-full block mt-4">
		<img src={src} alt="banner" className="hover:scale-105 transition" />
	</Link>
  )
}

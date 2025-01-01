import { Link } from "react-router-dom";

export default function NavCategory() {
  return (
	<Link to={"/categories/id"} className="cursor-pointer relative after:content-[''] after:w-0 after:h-[2px] after:absolute after:bg-black after:left-0 after:bottom-0 text-gray-500 hover:text-black hover:after:animate-expandWidth hover:after:w-full transition">Maishiy texnika</Link>
  )
}

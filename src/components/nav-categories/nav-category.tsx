import { Link } from "react-router-dom";
import { ICategory } from "../../utils/interfaces/product.interface";

interface IProps {
  category: ICategory;
}

export const NavCategory = ({ category }: IProps) => {
  return (
    <Link
      to={`/categories/${category.id}`}
      className="cursor-pointer relative after:content-[''] after:w-0 after:h-[2px] after:absolute after:bg-black after:left-0 after:bottom-0 text-gray-500 hover:text-black hover:after:animate-expandWidth hover:after:w-full transition whitespace-nowrap"
    >
      {category.name}
    </Link>
  );
};

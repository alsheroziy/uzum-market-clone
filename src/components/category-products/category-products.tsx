import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { ProductCard } from "../product-card/product-card";
import { IProduct } from "../../utils/interfaces/product.interface";

interface IProps {
  products: IProduct[];
  title: string;
  link?: string;
}

export const CategoryProducts = ({ link, products, title }: IProps) => {
  if (!products.length) {
    return null;
  }

  return (
    <div className="mt-4">
      <Link
        to={link || "#"}
        className="flex items-center gap-2 text-3xl font-semibold cursor-pointer"
      >
        {title} {link && <ChevronRightIcon className="w-8" />}
      </Link>

      <div className="mt-3 grid grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

import { Link } from "react-router-dom";
import { ProductCardFooter } from "./product-card-footer";
import { ProductRating } from "./product-ration";
import { IProduct } from "../../utils/interfaces/product.interface";

interface IProps {
  product: IProduct;
}

export const ProductCard = ({ product }: IProps) => {
  let productImage = product.images[0];
  const isImageUrl = productImage.startsWith("https");

  if (!isImageUrl) {
    productImage = productImage.slice(2, -2);
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="max-w-[232px] w-full hover:shadow-lg transition cursor-pointer rounded-xl"
    >
      <img
        src={productImage}
        className="rounded-xl hover:rounded-b-none transition"
      />
      <div className="p-2 pt-3">
        <p className="line-clamp-2 text-sm mt-2">{product.description}</p>
        <ProductRating />
        <ProductCardFooter product={product} />
      </div>
    </Link>
  );
};

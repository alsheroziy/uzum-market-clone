import { useNavigate } from "react-router-dom";
import { IProduct } from "../../utils/interfaces/product.interface";
import { ProductDetails } from "./product-details";
import { ProductImages } from "./product-images";

interface IProps {
  product: IProduct | null;
}

export const Product = ({ product }: IProps) => {
  const navigate = useNavigate();

  if (!product) {
    navigate("/404");

    return;
  }

  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <ProductImages product={product} />
      <ProductDetails product={product} />
    </div>
  );
};

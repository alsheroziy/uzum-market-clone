import { useState } from "react";
import { Divider } from "../divider";
import { ProductQuantityInput } from "./product-quantity-input";
import { ProductPrice } from "./product-price";
import { ProductButtons } from "./product-buttons";
import { ProductDescription } from "./product-description";
import { IProduct } from "../../utils/interfaces/product.interface";

interface IProps {
  product: IProduct;
}

export const ProductDetails = ({ product }: IProps) => {
  const [productQuantity, setProductQuantity] = useState<number>(1);

  return (
    <div>
      <p className="text-2xl">{product.title}</p>

      <Divider className="my-3" />
      <ProductQuantityInput
        setValue={setProductQuantity}
        value={productQuantity}
      />
      <ProductPrice product={product} productQuantity={productQuantity} />
      <ProductButtons product={product} quantity={productQuantity} />
      <ProductDescription product={product} />
    </div>
  );
};

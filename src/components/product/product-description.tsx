import { IProduct } from "../../utils/interfaces/product.interface";

interface IProps {
  product: IProduct;
}

export const ProductDescription = ({ product }: IProps) => {
  return <p className="mt-4">{product.description}</p>;
};

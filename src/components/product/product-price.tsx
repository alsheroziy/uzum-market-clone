import { IProduct } from "../../utils/interfaces/product.interface";
import { currencyExchanger } from "../../utils/utils";

interface IProps {
  product: IProduct;
  productQuantity: number;
}

export const ProductPrice = ({ product, productQuantity }: IProps) => {
  return (
    <div className="mt-3">
      <p>Narxi:</p>
      <p className="font-semibold text-2xl  mt-1">
        {currencyExchanger(product.price * productQuantity)} so'm
      </p>
    </div>
  );
};

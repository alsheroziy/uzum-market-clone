import { useCartContext } from "../../context/cart.context";
import { IProduct } from "../../utils/interfaces/product.interface";
import { Button } from "../button";

interface IProps {
  product: IProduct;
  quantity: number;
}

export const ProductButtons = ({ product, quantity }: IProps) => {
  const { handleAddToCart } = useCartContext();

  return (
    <div className="flex items-center  gap-2 mt-4">
      <Button
        className="w-full"
        onClick={handleAddToCart.bind(null, product, quantity)}
      >
        Savatga qo'shish
      </Button>
      <Button variant="outline" className="w-full">
        1ta klikda xarid qilish
      </Button>
    </div>
  );
};

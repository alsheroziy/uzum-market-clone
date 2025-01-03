import { useEffect, useState } from "react";
import { ProductQuantityInput } from "../product/product-quantity-input";
import { TrashIcon } from "@heroicons/react/24/outline";
import { ICartItem } from "../../utils/interfaces/cart.interface";
import { useCartContext } from "../../context/cart.context";

interface IProps {
  cartProduct: ICartItem;
}

export const CartItem = ({ cartProduct }: IProps) => {
  const [productQuantity, setProductQuantity] = useState<number>(
    cartProduct.quantity
  );

  const { handleRemoveFromCart, modifyCartItem } = useCartContext();

  useEffect(() => {
    modifyCartItem(cartProduct, productQuantity);
  }, [productQuantity]);

  return (
    <div className="flex items-center py-5 gap-2 border-b">
      <div className="flex items-center gap-2 flex-grow">
        <img
          src={cartProduct.images[0]}
          alt={cartProduct.title}
          className="w-24"
        />
        <div>
          <p>Tova Kukmara Granit Ultra, olinadigan tutqich bilan</p>
          <ProductQuantityInput
            setValue={setProductQuantity}
            value={productQuantity}
          />
        </div>
      </div>
      <div>
        <div
          className="flex items-center gap-1 cursor-pointer text-gray-400"
          onClick={handleRemoveFromCart.bind(null, cartProduct)}
        >
          <TrashIcon className="w-6 h-6 " />
          <span>Yo'q qilish</span>
        </div>
        <p className="mt-3 text-lg font-semibold">
          {(cartProduct.price * cartProduct.quantity).toLocaleString()} sum
        </p>
      </div>
    </div>
  );
};

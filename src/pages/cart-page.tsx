import { CartItems } from "../components/cart/cart-items";
import { CartSummary } from "../components/cart/cart-summary";
import { useCartContext } from "../context/cart.context";

export const CartPage = () => {
  const { cart } = useCartContext();
  return (
    <div className="mt-10">
      <h2 className="text-3xl">
        Savatingiz,{" "}
        <span className="text-gray-400">{cart.items.length} mahsulot</span>
      </h2>

      <div className="grid grid-cols-12 gap-4 mt-4 items-start">
        <CartItems />
        <CartSummary />
      </div>
    </div>
  );
};

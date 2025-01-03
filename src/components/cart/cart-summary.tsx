import { useCartContext } from "../../context/cart.context";
import { Button } from "../button";

export const CartSummary = () => {
  const { cart } = useCartContext();
  return (
    <div className="col-span-3 border p-4 rounded-lg ">
      <h2 className="text-2xl font-semibold">Buyurtmangiz</h2>
      <div className="flex items-center justify-between mt-4">
        <p> Mahsulotlar soni:</p>
        <p>{cart.items.length} ta</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <p>Jami:</p>
        <p className="text-xl font-semibold">{cart.totalPrice.toLocaleString()} so'm</p>
      </div>
      <Button className="w-full mt-4">Sotib olish</Button>
    </div>
  );
};

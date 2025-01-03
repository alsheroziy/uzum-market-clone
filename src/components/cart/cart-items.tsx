import { useCartContext } from "../../context/cart.context";
import { CartItem } from "./cart-item";

const month: Record<number, string> = {
  0: "Yanvar",
  1: "Fevral",
  2: "Mart",
  3: "Aprel",
  4: "May",
  5: "Iyul",
  6: "Iyun",
  7: "Avgust",
  8: "Sentabr",
  9: "Oktabr",
  10: "Noyabr",
  11: "Dekabr",
};

export const CartItems = () => {
  const { cart } = useCartContext();
  const currentDate = new Date().getDate();
  const currentMonth = new Date().getMonth();

  return (
    <div className="border p-4 rounded-lg col-span-9">
      <div className="flex items-center justify-between">
        <div>
          <input id="select_checkbox" type="checkbox" />
          <label htmlFor="select_checkbox" className="ml-2">
            Hammasini belgilash
          </label>
        </div>
        <p className="text-sm text-gray-400">
          Yetkazib berishning eng yaqin sanasi:{" "}
          <span className="text-primary border border-primary px-2 py-1">
            {currentDate + 1}-{month[currentMonth]}
          </span>
        </p>
      </div>
      <hr className="my-4" />

      <div>
        {cart.items.map((item) => (
          <CartItem key={item.id} cartProduct={item} />
        ))}
      </div>
    </div>
  );
};

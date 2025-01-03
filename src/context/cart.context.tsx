import { createContext, ReactNode, useContext, useMemo } from "react";
import { IProduct } from "../utils/interfaces/product.interface";
import { useLocalStorage } from "react-use";
import { ICart, ICartItem } from "../utils/interfaces/cart.interface";
import { currencyExchangerNumber } from "../utils/utils";
import { toast } from "react-toastify";

interface ICartContext {
  handleAddToCart: (product: IProduct, quantity: number) => void;
  handleRemoveFromCart: (cartItem: ICartItem) => void;
  modifyCartItem: (cartItem: ICartItem, quantity: number) => void;
  cart: ICart;
}

const CartContext = createContext<ICartContext | null>(null);

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) throw new Error("CartContext must be used in Provider");

  return context;
};

interface IProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: IProps) => {
  const cartInitialValue: ICart = {
    items: [],
    totalPrice: 0,
    totalItems: 0,
  };

  const [cart, setCart] = useLocalStorage<ICart | undefined>(
    "cart",
    cartInitialValue
  );

  const handleAddToCart = (product: IProduct, quantity: number) => {
    if (cart) {
      const isProductAlreadyInCart = cart.items.some(
        (p) => p.id === product.id
      );

      toast.success("Mahsulot savatga qo'shildi");

      if (isProductAlreadyInCart) {
        const updatedCartItems = cart.items.map((cartItem) => {
          if (cartItem.id === product.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + quantity,
            };
          } else {
            return cartItem;
          }
        });

        setCart({
          ...cart,
          items: updatedCartItems,
          totalPrice:
            cart.totalPrice + currencyExchangerNumber(product.price) * quantity,
        });

        return;
      }

      const cartItem: ICartItem = {
        id: product.id,
        images: product.images,
        price: currencyExchangerNumber(product.price),
        quantity,
        title: product.title,
      };

      const updatedCart: ICart = {
        ...cart,
        items: [...cart.items, cartItem],
        totalPrice:
          cart.totalPrice + currencyExchangerNumber(product.price) * quantity,
      };

      setCart(updatedCart);
    }
  };

  const handleRemoveFromCart = (cartItem: ICartItem) => {
    if (cart) {
      const updatedCart = cart.items.filter((item) => item.id !== cartItem.id);

      setCart({
        ...cart,
        items: updatedCart,
        totalPrice: cart.totalPrice - cartItem.price * cartItem.quantity,
      });
    }
  };

  const modifyCartItem = (cartItem: ICartItem, productQuantity: number) => {
    if (cart) {
      const updatedCartItems = cart.items.map((item) => {
        if (item.id === cartItem.id) {
          return {
            ...item,
            quantity: productQuantity,
          };
        } else {
          return item;
        }
      });

      setCart({
        ...cart,
        items: updatedCartItems,
        totalPrice:
          cart.totalPrice +
          cartItem.price * (productQuantity - cartItem.quantity),
      });
    }
  };

  const value = useMemo(() => {
    return {
      handleAddToCart,
      handleRemoveFromCart,
      modifyCartItem,
      cart: cart as ICart,
    };
  }, [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

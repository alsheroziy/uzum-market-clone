import { IProduct } from "./product.interface";

export interface ICart {
  items: ICartItem[];
  totalPrice: number;
  totalItems: number;
}

export interface ICartItem {
  id: IProduct["id"];
  images: IProduct["images"];
  title: IProduct["title"];
  price: IProduct["price"];
  quantity: number;
}

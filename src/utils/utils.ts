import { IProduct } from "./interfaces/product.interface";

const sumInUsd = 12722;

export const currencyExchanger = (price: IProduct["price"]) => {
  const exchangedPrice = price * sumInUsd;

  return exchangedPrice.toLocaleString();
};

export const currencyExchangerNumber = (price: IProduct["price"]) => {
  return price * sumInUsd;
};

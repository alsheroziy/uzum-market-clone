import { useEffect, useState } from "react";
import { CategoryProducts } from "../components/category-products/category-products";
import { Product } from "../components/product/product";
import { IProduct } from "../utils/interfaces/product.interface";
import { fetcher } from "../api/axios";
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const [product, setProduct] = useState<IProduct | null>(null);

  const stringfyLastViewedProducts = localStorage.getItem(
    "last-viewed-products"
  );

  const lastViewedProducts: IProduct[] =
    typeof stringfyLastViewedProducts === "string"
      ? JSON.parse(stringfyLastViewedProducts)
      : [];

  const { productId } = useParams();

  const filteredLastViewedProduct = lastViewedProducts.filter(
    (product) => product.id !== parseInt(productId as string)
  );

  const fetchProduct = async () => {
    const { data } = await fetcher(`/products/${productId}`);

    setProduct(data);
    saveProduct(data as IProduct);
  };

  const saveProduct = (product: IProduct) => {
    const productIndex = lastViewedProducts.findIndex(
      (product) => product.id === parseInt(productId as string)
    );

    const copyOfProducts = lastViewedProducts;

    if (productIndex !== -1) {
      const [removedElement] = copyOfProducts?.splice(
        productIndex,
        1
      ) as IProduct[];
      copyOfProducts?.unshift(removedElement);

      localStorage.setItem(
        "last-viewed-products",
        JSON.stringify([...copyOfProducts])
      );
      return;
    }

    localStorage.setItem(
      "last-viewed-products",
      JSON.stringify([product, ...copyOfProducts])
    );
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Product product={product} />
      <CategoryProducts
        products={filteredLastViewedProduct || []}
        title="Oxirgi ko'rilgan mahsulotlar"
      />
    </>
  );
};

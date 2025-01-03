import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { IProduct } from "../../utils/interfaces/product.interface";

interface IProps {
  product: IProduct;
}

export const ProductImages = ({ product }: IProps) => {
  const [selectedImage, setSelectedImage] = useState<string>(product.images[0]);

  return (
    <div className="grid grid-cols-6 gap-2">
      <div className="col-span-1 flex flex-col gap-2">
        {product.images.map((image, index) => {
          const isActive = image === selectedImage;
          return (
            <img
              className={twMerge(
                "cursor-pointer border border-transparent",
                isActive && "border-gray-600"
              )}
              src={image}
              alt="product title"
              key={index}
              onClick={setSelectedImage.bind(null, image)}
            />
          );
        })}
      </div>
      <img
        src={selectedImage}
        alt="product-title"
        className="flex-grow col-span-5"
      />
    </div>
  );
};

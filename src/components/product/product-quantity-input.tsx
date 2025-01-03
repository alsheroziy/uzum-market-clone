import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

interface IProps {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

export const ProductQuantityInput = ({ setValue, value }: IProps) => {
  const incrementQuantity = () => {
    setValue((prevVal) => prevVal + 1);
  };

  const decrementQuantity = () => {
    if (value - 1 > 0) {
      setValue((prevVal) => prevVal - 1);
    }
  };

  const changeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.includes("-")) {
      return;
    }

    setValue(parseInt(value));
  };

  const onBlurInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!value) setValue(1);
  };

  return (
    <div>
      <p>Miqdor:</p>
      <div className="flex items-center gap-2 border rounded-md w-fit mt-1">
        <div className="p-2">
          <MinusIcon
            onClick={decrementQuantity}
            className="w-5 cursor-pointer"
          />
        </div>
        <input
          type="number"
          onChange={changeQuantity}
          onBlur={onBlurInput}
          value={value}
          className="text-center outline-none w-10"
        />
        <div className="p-2">
          <PlusIcon
            onClick={incrementQuantity}
            className="w-5 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva("py-3 px-5 rounded-lg", {
  variants: {
    variant: {
      solid: "bg-primary text-white",
      outline: "border border-primary text-primary",
    },
  },

  defaultVariants: {
    variant: "solid",
  },
});

interface IProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = ({ className, variant, ...props }: IProps) => {
  return (
    <button
      className={twMerge(buttonVariants({ variant }), className)}
      {...props}
    />
  );
};

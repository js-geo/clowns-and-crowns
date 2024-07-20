import { cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva("", {
  variants: {
    variant: {
      primary:
        "text-white py-[0.625rem] px-[4.25rem] bg-[#3C50E1] rounded-[3rem]",
      secondary:
        "bg-[#F5F5F5] py-[20px] px-[24px] rounded-[10px] hover:text-[#3C50E1]",
    },
  },
});

export const Button: React.FC<
  ComponentProps<"button"> & { variant: "primary" | "secondary" }
> = ({ variant, className, ...props }) => {
  return (
    <button
      className={twMerge("", buttonVariants({ variant }), className)}
      {...props}
    />
  );
};

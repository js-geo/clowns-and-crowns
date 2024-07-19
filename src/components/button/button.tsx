import { cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva("", {
  variants: {
    variant: {
      primary:
        "border border-[#695AE0] hover:text-white hover:bg-[#695AE0] hover:border-[#695AE0] text-[#695AE0]",
      secondary: "bg-black text-white",
    },
  },
});

export const Button: React.FC<
  ComponentProps<"button"> & { variant: "primary" | "secondary" }
> = ({ variant, className, ...props }) => {
  return (
    <button
      className={twMerge(
        "w-full border rounded-xl py-2 text-left pl-4 ",
        buttonVariants({ variant }),
        className
      )}
      {...props}
    />
  );
};

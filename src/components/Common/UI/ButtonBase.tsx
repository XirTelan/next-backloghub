import { ButtonBaseProps } from "@/types";
import React from "react";

const sizes = {
  small: "h-8",
  medium: "h-10",
  large: "h-12",
  elarge: "h-16",
};
const buttonSize = {
  small: "w-8  min-w-8",
  medium: "w-10  min-w-10",
  large: "w-12 min-w-12",
  elarge: "w-12 min-w-12",
};
const buttonColorVariants = {
  primary: "bg-primary-btn hover:bg-primary-btn-hover text-white ",
  secondary: "bg-secondary-btn hover:bg-secondary-btn-hover text-white",
  accent: "bg-green-600 hover:bg-green-500",
  tertiary:
    "outline text-white  hover:text-inverse outline-1 -outline-offset-2 outline-white hover:bg-tertiary-btn-hover",
  ghost: "text-primary-link hover:bg-subtle-3/15",
  dangerPrimary: "bg-danger-btn hover:bg-danger-btn-hover text-white",
  dangerTertiary: "  ",
  dangerGhost:
    "text-danger-text hover:bg-danger-btn-hover hover:text-white disabled:bg-transparent",
};
export type ButtonColorVariants = keyof typeof buttonColorVariants;

const ButtonBase = ({
  text,
  hideText = false,
  size = "large",
  variant = "primary",
  icon,
  ...props
}: ButtonBaseProps) => {
  return (
    <>
      <button
        {...props}
        className={`${buttonColorVariants[variant]} ${sizes[size]}  relative flex  w-full  items-center text-nowrap     disabled:bg-layer-3 disabled:text-white/25 `}
      >
        {text && (
          <div className={` px-2  ${hideText && "hidden md:block"}`}>
            {text}
          </div>
        )}
        {icon && (
          <div
            className={`${buttonSize[size]} ${text && "ms-auto"}  flex min-h-8 items-center justify-center p-1 `}
          >
            {icon}
          </div>
        )}
      </button>
    </>
  );
};

export default ButtonBase;

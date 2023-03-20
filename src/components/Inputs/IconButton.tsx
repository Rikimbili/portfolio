import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function IconButton({
  children,
  className = "",
  ...rest
}: Props) {
  return (
    <button
      className={`cursor-pointer transition duration-100 ease-out hover:text-indigo-500 active:scale-[96%] active:duration-75
        dark:hover:text-indigo-400 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

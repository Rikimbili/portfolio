import { cva,type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

const buttonStyles = cva(
  "flex select-none items-center gap-2 rounded-md px-3 py-1 transition duration-100 ease-out active:scale-[96%] active:duration-75",
  {
    variants: {
      variant: {
        filled:
          "bg-slate-300 text-slate-900 hover:bg-indigo-400 dark:bg-slate-600 dark:text-slate-50 dark:hover:bg-indigo-500",
        text: "text-slate-900 dark:text-slate-50 hover:bg-slate-300 dark:hover:bg-slate-600",
      },
      disabled: {
        true: "cursor-not-allowed text-slate-50 bg-indigo-900/80 dark:text-slate-900 dark:bg-indigo-100/80",
      },
    },
    defaultVariants: {
      variant: "filled",
    },
  }
);

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  disabled?: boolean;
  variant?: "filled" | "text";
  className?: string;
  children: ReactNode;
}

export default function Button({
  disabled,
  variant,
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <button
      className={buttonStyles({ disabled, variant }) + " " + className}
      {...rest}
    >
      {children}
    </button>
  );
}

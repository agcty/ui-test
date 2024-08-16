import {
  composeRenderProps,
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { PlusCircle } from "lucide-react";

export interface ButtonProps extends RACButtonProps {
  variant?: "primary" | "secondary" | "destructive";
}

const button = tv({
  base: [
    "relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold",
    "px-3.5 py-2.5 sm:px-3 sm:py-1.5 sm:text-sm",
    "focus:outline-none focus:outline-2 focus:outline-offset-2 focus:outline-blue-500",
    "disabled:opacity-50",
    "[&>svg]:-mx-0.5 [&>svg]:my-0.5 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:shrink-0 sm:[&>svg]:my-1 sm:[&>svg]:h-4 sm:[&>svg]:w-4",
    "before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)]",
    "before:shadow",
    "after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)]",
    "after:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]",
    "disabled:before:shadow-none disabled:after:shadow-none",
  ],
  variants: {
    variant: {
      primary: [
        "bg-blue-600 text-white border-blue-700",
        "before:bg-blue-600",
        "hover:before:bg-blue-700 active:before:bg-blue-800",
        "dark:border-blue-500",
        "[&>svg]:text-blue-200 hover:[&>svg]:text-blue-100 active:[&>svg]:text-blue-100",
      ],
      secondary: [
        "bg-zinc-100 text-zinc-950 border-zinc-200",
        "before:bg-zinc-100",
        "hover:before:bg-zinc-200 active:before:bg-zinc-300",
        "dark:bg-zinc-800 dark:text-white dark:border-zinc-700",
        "dark:before:bg-zinc-800 dark:hover:before:bg-zinc-700 dark:active:before:bg-zinc-600",
        "[&>svg]:text-zinc-500 hover:[&>svg]:text-zinc-600 active:[&>svg]:text-zinc-700",
        "dark:[&>svg]:text-zinc-400 dark:hover:[&>svg]:text-zinc-300 dark:active:[&>svg]:text-zinc-200",
      ],
      destructive: [
        "bg-red-600 text-white border-red-700",
        "before:bg-red-600",
        "hover:before:bg-red-700 active:before:bg-red-800",
        "[&>svg]:text-red-200 hover:[&>svg]:text-red-100 active:[&>svg]:text-red-100",
      ],
    },
    isDisabled: {
      true: "bg-zinc-100 text-zinc-400 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-500 dark:border-zinc-700/50",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export function Button({ children, ...props }: ButtonProps) {
  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        button({ ...renderProps, variant: props.variant, className })
      )}
    >
      <PlusCircle className="w-4 h-4" />
      <span
        className="absolute left-1/2 top-1/2 h-[max(100%,2.75rem)] w-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
        aria-hidden="true"
      />
      <>{children}</>
    </RACButton>
  );
}

import {
  composeRenderProps,
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusStyles } from "./utils";

export interface ButtonProps extends RACButtonProps {
  variant?: "primary" | "secondary" | "destructive" | "icon";
}

const button = tv({
  base: [
    "relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold",
    "px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6",
    focusStyles,
    "disabled:opacity-50",
    "[&>svg]:-mx-0.5 [&>svg]:my-0.5 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:shrink-0 sm:[&>svg]:my-1 sm:[&>svg]:h-4 sm:[&>svg]:w-4",
    "transition-colors duration-200 ease-in-out",
    "[&>svg]:transition-colors [&>svg]:duration-200 [&>svg]:ease-in-out",
    "before:transition-colors before:duration-200 before:ease-in-out",
    "after:transition-colors after:duration-200 after:ease-in-out",
  ],
  variants: {
    variant: {
      primary: [
        "text-white bg-zinc-900 border-zinc-950/90",
        "before:bg-zinc-900",
        "hover:before:bg-zinc-800 active:before:bg-zinc-700",
        "after:hover:bg-white/10 after:active:bg-white/10",
        "dark:bg-zinc-600 dark:border-zinc-500",
        "dark:before:bg-zinc-600 dark:hover:before:bg-zinc-500 dark:active:before:bg-zinc-400",
        "[&>svg]:text-zinc-300 hover:[&>svg]:text-zinc-200 active:[&>svg]:text-zinc-100",
        "dark:[&>svg]:text-zinc-300 dark:hover:[&>svg]:text-zinc-200 dark:active:[&>svg]:text-zinc-100",
        "before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)]",
        // shadow
        "before:shadow",
        "after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)]",
        "after:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]",
        "disabled:before:shadow-none disabled:after:shadow-none",
      ],
      secondary: [
        "text-zinc-950 bg-white border-zinc-950/10",
        "before:bg-white",
        "hover:before:bg-zinc-50 active:before:bg-zinc-100",
        "after:hover:bg-zinc-950/[2.5%] after:active:bg-zinc-950/[2.5%]",
        "dark:text-white dark:bg-zinc-800 dark:border-white/15",
        "dark:before:bg-zinc-800 dark:hover:before:bg-zinc-700 dark:active:before:bg-zinc-600",
        "dark:after:hover:bg-white/5 dark:after:active:bg-white/5",
        "[&>svg]:text-zinc-600 hover:[&>svg]:text-zinc-800 active:[&>svg]:text-zinc-900",
        "dark:[&>svg]:text-zinc-400 dark:hover:[&>svg]:text-zinc-300 dark:active:[&>svg]:text-zinc-200",
        "before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)]",
        // shadow
        "before:shadow",
        "after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)]",
        "after:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]",
        "disabled:before:shadow-none disabled:after:shadow-none",
      ],
      destructive: [
        "text-white bg-red-600 border-red-700/90",
        "before:bg-red-600",
        "hover:before:bg-red-700 active:before:bg-red-800",
        "after:hover:bg-white/10 after:active:bg-white/10",
        "[&>svg]:text-red-200 hover:[&>svg]:text-red-100 active:[&>svg]:text-white",
        "before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)]",
        // shadow
        "before:shadow",
        "after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)]",
        "after:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]",
        "disabled:before:shadow-none disabled:after:shadow-none",
      ],
      icon: [
        "p-1 bg-transparent border-transparent",
        "[&>svg]:text-zinc-500 hover:[&>svg]:text-zinc-600 active:[&>svg]:text-zinc-700",
        "dark:[&>svg]:text-zinc-400 dark:hover:[&>svg]:text-zinc-300 dark:active:[&>svg]:text-zinc-200",
      ],
    },
    isDisabled: {
      true: "bg-zinc-100 text-zinc-400 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-500 dark:border-zinc-700/50 [&>svg]:text-zinc-300 dark:[&>svg]:text-zinc-600",
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
      <span
        // Makes the touch area bigger
        className="absolute left-1/2 top-1/2 h-[max(100%,2.75rem)] w-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
        aria-hidden="true"
      />
      <>{children}</>
    </RACButton>
  );
}

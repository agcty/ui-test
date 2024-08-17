import {
  ToggleButton as RACToggleButton,
  ToggleButtonProps,
  composeRenderProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const toggleVariants = tv({
  base: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-transparent hover:bg-zinc-100 hover:text-zinc-900",
      outline:
        "border border-zinc-300 bg-transparent hover:bg-zinc-100 hover:text-zinc-900",
    },
    size: {
      default: "h-10 px-3",
      sm: "h-9 px-2.5",
      lg: "h-11 px-5",
    },
    isSelected: {
      false: "",
      true: "bg-zinc-200 text-zinc-900",
    },
    isDisabled: {
      true: "opacity-50 cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export function ToggleButton({
  variant,
  size,
  ...props
}: ToggleButtonProps & {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
}) {
  return (
    <RACToggleButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        toggleVariants({ variant, size, ...renderProps, className })
      )}
    />
  );
}

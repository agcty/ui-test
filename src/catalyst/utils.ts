import { composeRenderProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

import { tv } from "tailwind-variants";

export const focusRing = tv({
  base: "outline outline-blue-600 dark:outline-blue-500 forced-colors:outline-[Highlight] outline-offset-2",
  variants: {
    isFocusVisible: {
      false: "outline-0",
      true: "outline-2",
    },
  },
});

export function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tw: string
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tw, className));
}

export const focusStyles =
  "focus:outline-none data-[focused]:outline-none data-[focus-visible]:outline-none data-[focus-visible]:outline-2 data-[focus-visible]:outline-offset-2 data-[focus-visible]:outline-blue-500";

export const groupFocusStyles =
  "group-data-[focus-visible]:outline group-data-[focus-visible]:outline-2 group-data-[focus-visible]:outline-offset-2 group-data-[focus-visible]:outline-blue-500";

export const groupFocusRing = tv({
  variants: {
    isFocusVisible: {
      false: "",
      true: groupFocusStyles,
    },
  },
});

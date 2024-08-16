import { composeRenderProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

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

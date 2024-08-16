import React from "react";
import {
  Switch as AriaSwitch,
  SwitchProps as AriaSwitchProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { composeTailwindRenderProps } from "./utils";

export interface SwitchProps extends Omit<AriaSwitchProps, "children"> {
  children?: React.ReactNode;
}

const focus =
  "group-data-[focus-visible]:outline group-data-[focus-visible]:outline-2 group-data-[focus-visible]:outline-offset-2 group-data-[focus-visible]:outline-blue-500";

const switchStyles = tv({
  base: `relative isolate inline-flex h-6 w-10 cursor-default rounded-full p-[3px] sm:h-5 sm:w-8 transition ease-in-out duration-200 ${focus}`,
  variants: {
    isSelected: {
      false:
        "bg-zinc-200 ring-1 ring-inset ring-black/5 dark:bg-white/5 dark:ring-white/15 hover:ring-black/15 dark:hover:ring-white/25",
      true: "bg-zinc-600 ring-zinc-700/90 dark:bg-white/25 dark:ring-transparent hover:ring-zinc-700/90 dark:hover:ring-transparent",
    },
    isDisabled: {
      true: "bg-zinc-200 opacity-50 dark:bg-white/15 cursor-not-allowed",
    },
  },
});

const handleStyles = tv({
  base: "pointer-events-none relative inline-block size-[1.125rem] rounded-full sm:size-3.5 translate-x-0 transition duration-200 ease-in-out border border-transparent bg-white shadow ring-1 ring-black/5",
  variants: {
    isSelected: {
      false: "",
      true: "translate-x-4 sm:translate-x-3 shadow-zinc-900/20 ring-zinc-700/90",
    },
    isDisabled: {
      true: "opacity-50",
    },
  },
});

export function Switch({ children, ...props }: SwitchProps) {
  return (
    <AriaSwitch
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "group inline-flex items-center gap-2.5 text-gray-800 disabled:text-gray-300 dark:text-zinc-200 dark:disabled:text-zinc-600 transition"
      )}
    >
      {({ isSelected, isDisabled }) => (
        <>
          <div className={switchStyles({ isSelected, isDisabled })}>
            <span className={handleStyles({ isSelected, isDisabled })} />
          </div>
          {children}
        </>
      )}
    </AriaSwitch>
  );
}

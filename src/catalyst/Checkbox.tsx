import { ReactNode } from "react";
import {
  Checkbox as AriaCheckbox,
  CheckboxGroup as AriaCheckboxGroup,
  CheckboxProps,
  CheckboxGroupProps as AriaCheckboxGroupProps,
  ValidationResult,
  composeRenderProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { Description, FieldError, Label } from "./Field";
import {
  composeTailwindRenderProps, groupFocusStyles
} from "./utils";

export interface CheckboxGroupProps
  extends Omit<AriaCheckboxGroupProps, "children"> {
  label?: string;
  children?: ReactNode;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function CheckboxGroup(props: CheckboxGroupProps) {
  return (
    <AriaCheckboxGroup
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "flex flex-col gap-2.5"
      )}
    >
      <Label className="font-medium">{props.label}</Label>
      {props.children}
      {props.description && <Description>{props.description}</Description>}
      <FieldError>{props.errorMessage}</FieldError>
    </AriaCheckboxGroup>
  );
}

const checkboxStyles = tv({
  base: ["group inline-flex items-center focus:outline-none"  ],
  variants: {
    isDisabled: {
      false: "text-gray-800 dark:text-zinc-200",
      true: "opacity-50",
    },
  },
});

const boxStyles = tv({
  base: [
    "relative isolate flex w-[1.125rem] h-[1.125rem] sm:w-4 sm:h-4 items-center justify-center rounded-[0.3125rem] border transition",
    groupFocusStyles,
  ],
  variants: {
    isSelected: {
      false:
        "bg-white dark:bg-white/5 border-zinc-950/15 dark:border-white/15 hover:border-zinc-950/30 dark:hover:border-white/30",
      true: "bg-zinc-900 border-zinc-950/90 dark:bg-zinc-600 dark:border-zinc-600",
    },
    isInvalid: {
      true: "border-red-500 dark:border-red-500",
    },
    isDisabled: {
      true: "border-zinc-950/25 bg-zinc-950/5 dark:border-white/20 dark:bg-white/[2.5%]",
    },
  },
});

const iconStyles = tv({
  base: "w-4 h-4 sm:w-3.5 sm:h-3.5 stroke-white dark:stroke-zinc-900",
  variants: {
    isSelected: {
      true: "opacity-100",
      false: "opacity-0",
    },
  },
});

export function Checkbox(props: CheckboxProps) {
  return (
    <AriaCheckbox
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        checkboxStyles({ ...renderProps, className })
      )}
    >
      {({ isSelected, isIndeterminate, ...renderProps }) => (
        <>
          <span
            className={boxStyles({
              isSelected: isSelected || isIndeterminate,
              ...renderProps,
            })}
          >
            <svg
              className={iconStyles({
                isSelected: isSelected || isIndeterminate,
              })}
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                className="opacity-100 group-data-[indeterminate]:opacity-0"
                d="M3 8L6 11L11 3.5"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="opacity-0 group-data-[indeterminate]:opacity-100"
                d="M3 7H11"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="ml-2.5">
            <>{props.children}</>
          </span>
        </>
      )}
    </AriaCheckbox>
  );
}

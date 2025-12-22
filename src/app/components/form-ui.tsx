import * as React from 'react';
import { cn } from '../../utils';


type ButtonVariant = 'primary' | 'secondary';
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  isDisabled?: boolean;
  isLoading?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', isDisabled = false, isLoading = false, type = "button", className, children, ...rest },
    ref,
  ) => {
    const base = 'rounded-lg px-8 py-3';

    const variants: Record<ButtonVariant, string> = {
      primary: 'primary_btn',
      secondary: 'secondary_btn',
    };

    const disabled = isDisabled || isLoading;

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(base, variants[variant], className)}
        type={type}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';


type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {isError?: boolean, type: 'text' | 'email'};
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ isError = false, type = "text", ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={isError ? "border-red-700" : ""}
        {...rest}
      />
    )
  }
)

Input.displayName = 'Input';


type InputCheckboxProps = React.InputHTMLAttributes<HTMLInputElement> &
  {label: string};

export const InputCheckbox = React.forwardRef<HTMLInputElement, InputCheckboxProps>(
  ({ label, name, ...rest }, ref) => {
    const [isChecked, setIsChecked] = React.useState(rest.defaultChecked ?? false)

    return (
      <div className="relative h-fit w-fit flex bg-neutral-0 rounded-lg border-blue-200 border-2" onClick={() => setIsChecked(prev => !prev)}>
        <input
          {...rest}
          ref={ref}

          name={name}
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          className="peer sr-only"
        />

        <label

          className={`
            relative
            py-3 pl-10 pr-4 select-none cursor-pointer rounded-lg 

            after:absolute after:h-4 after:w-4 after:rounded
            after:left-4 after:top-1/2 after:-translate-y-1/2
            after:border-2 after:border-blue-200
            after:bg-neutral-0 after:bg-no-repeat after:bg-center

            peer-checked:after:bg-blue-600 peer-checked:after:border-none
            peer-checked:after:bg-[url('/assets/icon-check.svg')]

            peer-focus-visible:ring-2
            peer-focus-visible:ring-offset-3
            peer-focus-visible:ring-blue-600
          `}
        >
          {label}
        </label>
      </div>
    )
  }
)


InputCheckbox.displayName = "InputCheckbox";

type InputRadioProps = React.InputHTMLAttributes<HTMLInputElement> & {label: string}
export const InputRadio = React.forwardRef<HTMLInputElement, InputRadioProps>(
  ({label, ...rest}, ref) => {

    const [isChecked, setIsChecked] = React.useState(rest.defaultChecked ?? false)

    return (
      <div className="relative h-fit w-fit flex bg-neutral-0 rounded-lg border-blue-200 border-2">
        <input
          {...rest}
          ref={ref}
          name={rest.name}
          type="radio"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          className="peer sr-only"
        />

        <label
          className={`
            relative
            py-3 pl-10 pr-4 select-none cursor-pointer rounded-lg

            before:absolute before:h-4 before:w-4 before:rounded-full
            before:left-4 before:top-1/2 before:-translate-y-1/2
            before:border-2 before:border-blue-200
            before:bg-neutral-0 peer-checked:before:bg-blue-600 peer-checked:before:border-none
            
            after:absolute after:h-2 after:w-2 after:rounded-full
            after:left-5 after:top-1/2 after:-translate-y-1/2
            peer-checked:after:bg-neutral-0 peer-checked:after:border-none

            peer-focus-visible:ring-2
            peer-focus-visible:ring-offset-3
            peer-focus-visible:ring-blue-600`}
        >
          {label}
        </label>
      </div>
    );
  }
)

InputRadio.displayName = 'InputRadio';
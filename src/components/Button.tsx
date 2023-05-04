import { ButtonHTMLAttributes, ReactElement } from "react";

export enum ButtonVariant {
    OUTLINED,
    TEXT
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
 variant?: ButtonVariant
}

const styles = {
    [ButtonVariant.OUTLINED]: 'shadow-md bg-white shadow-purple-100 rounded-lg hover:bg-purple-100',
    [ButtonVariant.TEXT]: 'bg-transparent items-center text-sm rounded-lg'
}

export const Button = function ({ variant = ButtonVariant.OUTLINED, className, ...props }: ButtonProps): ReactElement {
    const style = `${styles[variant]} ${className}`

    return (
        <button type="button" {...props} className={`min-h-[3rem] inline-flex justify-center items-center p-2 mt-2 mx-3 ${style}`} />
    );
}

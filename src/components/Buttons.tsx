import { ButtonHTMLAttributes, ReactElement } from "react";
import { MAPPED_VARIANTS_CLASSES, ButtonVariant } from '../theme/buttons'

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>
type ButtonComponent = (propr: ButtonType) => ReactElement

const handleClassName = (variant: ButtonVariant, className?: string): string => {
  return `min-h-[3rem] inline-flex justify-center items-center p-2 mt-2 mx-3 ${MAPPED_VARIANTS_CLASSES[variant]} ${className || ""}`.trimEnd()
}

export const OutlinedButton: ButtonComponent = ({ className, ...props }) => <button type="button" className={handleClassName('outlined', className)} {...props} />
export const TextButton: ButtonComponent = ({ className, ...props }) => <button type="button" className={handleClassName('text', className)} {...props} />

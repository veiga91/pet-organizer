import { ButtonHTMLAttributes, ReactElement } from 'react'

export type ButtonVariant = 'text' | 'outlined'

export const MAPPED_BUTTON_VARIANTS_CLASSES: { [key in ButtonVariant]: string } = {
  'outlined': 'shadow-md bg-white shadow-purple-100 rounded-lg hover:bg-purple-100',
  'text': 'bg-transparent items-center text-sm rounded-lg'
}

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>
type ButtonComponent = (propr: ButtonType) => ReactElement

const handleClassName = (variant: ButtonVariant, className?: string): string => {
  return `min-h-[3rem] inline-flex justify-center items-center p-2 mt-2 mx-3 ${MAPPED_BUTTON_VARIANTS_CLASSES[variant]} ${className || ""}`.trimEnd()
}

export const OutlinedButton: ButtonComponent = ({ className, ...props }) => <button type="button" className={handleClassName('outlined', className)} {...props} />
export const TextButton: ButtonComponent = ({ className, ...props }) => <button type="button" className={handleClassName('text', className)} {...props} />

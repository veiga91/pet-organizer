import { HTMLAttributes, ReactElement } from "react"

export type TypographyLayout = 'h1' | 'h2' | 'h3' | 'h4' | 'p'

export const MAPPED_TAGS_CLASSES: { [key in TypographyLayout]: string } = {
  'h1': 'text-2xl',
  'h2': 'text-xl',
  'h3': 'text-lg',
  'h4':  'text-base',
  'p': 'text-sm'
}

type TypographyElementAttrType = HTMLAttributes<HTMLElement>;
type TypographyElement = (props: TypographyElementAttrType) => ReactElement

const handleClassName = (layout: TypographyLayout, className?: string): string => {
  return `${MAPPED_TAGS_CLASSES[layout]} ${className || ""}`.trimEnd()
}

export const H1: TypographyElement = ({className, ...props}) => <h1 className={handleClassName('h1', className)} {...props} />
export const H2: TypographyElement = ({className, ...props}) => <h2 className={handleClassName('h2', className)} {...props} />
export const H3: TypographyElement = ({className, ...props}) => <h3 className={handleClassName('h3', className)} {...props} />
export const H4: TypographyElement = ({className, ...props}) => <h4 className={handleClassName('h4', className)} {...props} />
export const P: TypographyElement  = ({className, ...props}) => <p className={handleClassName('p', className)} {...props} />

export type TypographyLayout = 'h1' | 'h2' | 'h3' | 'h4' | 'p'

export const MAPPED_TAGS_CLASSES: { [key in TypographyLayout]: string } = {
  'h1': 'text-2xl',
  'h2': 'text-xl',
  'h3': 'text-lg',
  'h4':  'text-base',
  'p': 'text-sm'
}

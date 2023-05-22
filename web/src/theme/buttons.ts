export type ButtonVariant = 'text' | 'outlined'

export const MAPPED_VARIANTS_CLASSES: { [key in ButtonVariant]: string } = {
  'outlined': 'shadow-md bg-white shadow-purple-100 rounded-lg hover:bg-purple-100',
  'text': 'bg-transparent items-center text-sm rounded-lg'
}
import { createElement, ReactElement, HTMLAttributes, ReactNode } from "react"

export enum HeaderTags {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4'
}

interface HTMLElement {
  children?: ReactNode | ReactElement
}

interface TypoHeadersProps extends HTMLAttributes<HTMLElement> {
  headertag: HeaderTags;
  children?: ReactNode | ReactElement
}

type MappedTagsStyles = { [key in HeaderTags]: string }

const MAPPED_TAGS_STYLES: MappedTagsStyles = {
  'h1': 'text-2xl',
  'h2': 'text-xl',
  'h3': 'text-lg',
  'h4':  'text-base'
}
export default function TypoHeaders ({ headertag, children, ...otherProps }: TypoHeadersProps) {
  const HeaderTag = createElement(headertag, { className: MAPPED_TAGS_STYLES[headertag], ...otherProps }, children)

  return HeaderTag
}

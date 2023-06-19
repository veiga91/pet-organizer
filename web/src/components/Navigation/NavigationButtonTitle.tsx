import { ReactNode } from 'react'
import classes from './navigation.module.css'

export function NavigationButtonTitle({ children }: { children: ReactNode }) {
  return <span className={`md:relative text-xs md:text-lg ${classes["icon-title"]} text-stone-500`}>{children}</span>
}
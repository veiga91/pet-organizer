import { home, signUp , signOut, user} from '../icons'
import signIn from './signIn.svg'
import { Routes } from '../routes'
import Image from 'next/image'
import { ReactElement } from 'react'
import classes from './navigation.module.css'
import Link from 'next/link'

type Icons = { [key in Routes]?: { alt: string, src: any, title: string } }

const ICONS: Icons = {
  [Routes.HOME]: { alt: 'Home icon', src: home, title: 'Home' },
  [Routes.SIGN_IN]: { alt: 'Sign In icon', src: signIn, title: 'Sign in' },
  [Routes.SIGN_UP]: { alt: 'Sign Up icon', src: signUp, title: 'Sign up' },
  [Routes.SIGN_OUT]: { alt: 'Sign Out icon', src: signOut, title: 'Sign out' },
  [Routes.PROFILE]: { alt: 'Profile icon', src: user, title: 'Profile' },
}

function NavigationIcon ({ route }: { route: Routes }): ReactElement {
  return (
    <li className={`overflow-hidden flex ${classes['link-wrapper']}`}>
      <Link title={ICONS[route]?.title} href={route} aria-label={ICONS[route]?.title} className={`my-2 gap-2 flex flex-col items-center md:flex-row md:justify-between ${classes["icon-button"]}`}>
        <Image className='max-h-[1.5rem] max-w-[1.5rem]' src={ICONS[route]?.src} alt={ICONS[route]?.alt || ''} />
        <span className={`md:relative text-xs md:text-lg ${classes["icon-title"]} text-stone-500`}>{ICONS[route]?.title}</span>
      </Link>
    </li>
  )
}

export default NavigationIcon

'use client'
import { home, signUp , signOut, user } from '@/components/icons'
import { Sidebar, NavigationButtonTitle } from '@/components/Navigation'
import { ReactElement, useState } from 'react'
import Image from 'next/image'
import { Routes } from '@/components/routes'
import Link from 'next/link'

type Icons = { [key in Routes]?: { alt: string, src: any, title: string } }

const ICONS: Icons = {
  [Routes.HOME]: { alt: 'Home icon', src: home, title: 'Home' },
  [Routes.SIGN_IN]: { alt: 'Sign In icon', src: signUp, title: 'Sign in' },
  [Routes.SIGN_UP]: { alt: 'Sign Up icon', src: signUp, title: 'Sign up' },
  [Routes.SIGN_OUT]: { alt: 'Sign Out icon', src: signOut, title: 'Sign out' },
  [Routes.PROFILE]: { alt: 'Profile icon', src: user, title: 'Profile' },
}

function NavigationButton ({ route }: { route: Routes }): ReactElement {
  return (
    <Link title={ICONS[route]?.title} href={route} aria-label={ICONS[route]?.title} className={`my-2 gap-2 flex flex-col items-center md:flex-row md:justify-between`}>
      <Image className='max-h-[1.5rem] max-w-[1.5rem]' src={ICONS[route]?.src} alt={ICONS[route]?.alt || ''} />
      <NavigationButtonTitle>{ICONS[route]?.title}</NavigationButtonTitle>
    </Link>
  )
}

export function Navigation (): ReactElement {
  const [isSidebarExpanded, toggleSidebar] = useState(true)

  return (
    <Sidebar
      toggleSidebar={() => toggleSidebar((prevVal) => !prevVal)} 
      renderNavigationButton={(route) => (
        <NavigationButton route={route as Routes} />
      )}
      expanded={isSidebarExpanded}
      routes={[Routes.HOME, Routes.PROFILE, Routes.SIGN_OUT]}
    />
  )
}
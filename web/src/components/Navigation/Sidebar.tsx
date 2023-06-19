import { ReactElement, ReactNode } from 'react'
import { OutlinedButton } from '@/components/Buttons'
import classes from './navigation.module.css'
import { arrowRight } from '@/components/icons'
import Image from 'next/image'

interface SidebarProps {
  routes: string[];
  renderNavigationButton: (route: string) => ReactNode;
  toggleSidebar: () => void;
  expanded: boolean;
}

export function Sidebar ({ routes, renderNavigationButton, expanded, toggleSidebar }: SidebarProps): ReactElement {

  const handleNavigationButtons = () => {
    return routes.map(
      (route) => (
        <li key={route} className={`overflow-hidden flex ${classes['link-wrapper']}`}>
          <div className={`${classes["icon-button-wrapper"]}`}>
            {renderNavigationButton(route)}
          </div>
        </li>
      )
    )
  }

  return (
    <>
      <footer className='md:hidden fixed bottom-0 w-full bg-white pb-2 flex px-3'>
        <nav className='flex flex-1'>
          <ul className='flex flex-1 justify-evenly'>
            {handleNavigationButtons()}
          </ul>
        </nav>
      </footer>
      <aside className={`hidden relative shadow-purple-100 shadow-md bg-white md:flex md:flex-col h-screen transition-all ease-in-out duration-500 ${expanded ? 'w-48' : 'w-16'} ${classes.sidebar}`} aria-label="Sidebar">
        <OutlinedButton aria-label='Toggle sidebar' onClick={toggleSidebar} className='!min-h-0 mx-0 absolute -right-7 !rounded-full flex justify-center items-center'>
          <Image src={arrowRight} className={`h-4 w-4 transition-transform ease-in-out duration-300 ${expanded ? 'rotate-180' : ''}`} alt='Arrow Right'/>
        </OutlinedButton>
        <nav className='flex flex-1'>
          <ul className='flex flex-1 flex-col mt-7'>
            {handleNavigationButtons()}
          </ul>
        </nav>
      </aside>
    </>
  )
}
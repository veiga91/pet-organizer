'use client'
import { ReactElement, useState } from 'react'
import { Routes } from '../routes'
import NavigationIcon from './NavigationIcon'
import { Button } from '../Button'
import classes from './navigation.module.css'
import { arrowRight } from '../icons'
import Image from 'next/image'

function Sidebar ({ routes }: { routes: Routes[] }): ReactElement {
  const [isSidebarExpanded, toggleSidebar] = useState(true)

  const handleNavigationButtons = () => {
    return routes.map(
      (route) => (
        <NavigationIcon key={route} route={route} />
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
      <aside className={`hidden relative shadow-purple-100 shadow-md bg-white md:flex md:flex-col h-screen transition-all ease-in-out duration-300 ${isSidebarExpanded ? 'w-48' : 'w-16'} ${classes.sidebar}`} aria-label="Sidebar">
        <Button aria-label='Toggle sidebar' onClick={() => toggleSidebar(prevVal => !prevVal)} className='!min-h-0 mx-0 absolute -right-7 !rounded-full flex justify-center items-center'>
          <Image src={arrowRight} className={`h-4 w-4 transition-transform ease-in-out duration-300 ${isSidebarExpanded ? 'rotate-180' : ''}`} alt='Arrow Right' />
        </Button>
        <nav className='flex flex-1'>
          <ul className='flex flex-col mt-7'>
            {handleNavigationButtons()}
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
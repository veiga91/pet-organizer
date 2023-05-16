import { logo } from './icons'
import Image from 'next/image'
import { H1 } from './Typography'

function Header () {
  return (
    <header className='flex flex-1 max-h-16 justify-center items-center'>
      <Image src={logo} alt='Logo' className=' max-h-14 w-14'/>
      <H1>Pet Organizer</H1>
    </header>
  )
}

export default Header
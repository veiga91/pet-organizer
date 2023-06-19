import { logo } from '@/components/icons'
import { H1 } from '@/components/Typography'
import Image from 'next/image'

export function Header () {
  return (
    <header className='flex flex-1 max-h-16 justify-center items-center'>
      <Image src={logo} alt='Logo' className=' max-h-14 w-14'/>
      <H1>Pet Organizer</H1>
    </header>
  )
}

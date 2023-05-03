import { logo } from './icons'
import Image from 'next/image'
import TypoHeaders, { HeaderTags } from './typography/TypoHeaders'

function Header () {
  return (
    <header className='flex flex-1 max-h-16 justify-center items-center'>
      <Image src={logo} alt='Logo' className=' max-h-14 w-14'/>
      <TypoHeaders headertag={HeaderTags.H1}>Pet Organizer</TypoHeaders>
    </header>
  )
}

export default Header
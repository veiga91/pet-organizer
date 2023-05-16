import Image from 'next/image'
import { H2 } from './Typography'
import Link from 'next/link'
import { Routes } from './routes'

interface CardProps {
  name: string;
  id: string
}


function Card ({ name, id }: CardProps) {
  return (
    <Link aria-label={name} title={name} id={id} href={`${Routes.PET_DETAIL}/${id}`}>
      <article className="bg-white h-72 md:h-80 w-60 md:w-64 rounded shadow-md hover:shadow-purple-100 hover:shadow-lg flex p-2 flex-col items-center">
        <Image width={240} height={320}
          src='https://picsum.photos/240/320'
          alt={name} className="flex flex-1 max-h-32 md:max-h-36 rounded"
        />
        
        <H2>{name}</H2>
        
        <ul className='flex flex-1 w-full flex-col px-1 mt-4'>
          <li id='groom' aria-label='Last grooming' role='img' className='flex items-center border-b-[1px] border-purple-50 mb-2 text-sm'>
            Last grooming: <span className='text-md ml-1' aria-labelledby='groom' role='status'>12/05/2023</span>
          </li>

          <li id='vet' aria-label='Last Vet visist' role='img' className='flex items-center border-b-[1px] border-purple-50 mb-2 text-sm'>
            Last Vet visist: <span className='text-md ml-1' aria-labelledby='vet' role='status'>12/05/2024</span>
          </li>
        </ul>
      </article>
    </Link>
  )
}

export default Card

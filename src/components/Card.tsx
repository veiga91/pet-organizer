import Image from 'next/image'
import TypoHeaders, { HeaderTags } from './typography/TypoHeaders'
import Link from 'next/link'
import { ReactNode } from 'react'
import { Routes } from './routes'

interface CardProps {
  name: string;
  id: string
}

type InfoItemProps = {
  children: ReactNode;
  id: string
}

function InfoItem ({ children, id }: InfoItemProps) {
  return (
    <li id={id} className='border-b-[1px] border-purple-50 mb-2 text-xs'>
      {children}
    </li>
  )
}

function Card ({ name, id }: CardProps) {

  return (
    <Link href={`${Routes.PET_DETAIL}/${id}`}>
      <article className="bg-white h-72 md:h-80 w-60 md:w-64 rounded shadow-md hover:shadow-purple-100 hover:shadow-lg flex p-2 flex-col items-center">
        <Image width={240} height={320}
          src='https://picsum.photos/240/320'
          alt={name} className="flex flex-1 max-h-32 md:max-h-36 rounded"
        />
        <TypoHeaders headertag={HeaderTags.H2}>{name}</TypoHeaders>
        <ul className='flex flex-1 w-full flex-col px-1 mt-4'>
          <InfoItem id='groom'>
            Last groom: <span className='text-sm ml-1' aria-labelledby='groom'>12/05/2023</span>
          </InfoItem>

          <InfoItem id='vaccines'>
            Expired Vaccines: <span className='text-sm ml-1' aria-labelledby='vaccines'>0</span>
          </InfoItem>

          <InfoItem id='vet'>
            Next Vet visist: <span className='text-sm ml-1' aria-labelledby='vet'>12/05/2024</span>
          </InfoItem>
        </ul>
      </article>
    </Link>
  )
}

export default Card

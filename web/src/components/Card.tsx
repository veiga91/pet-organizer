
import { ReactNode } from 'react'
import { H2 } from '@/components/Typography'

interface CardProps {
  title: string;
  renderImage: () => ReactNode;
}


export function Card ({ title, renderImage }: CardProps) {
  return (
    <article className="bg-white h-72 md:h-80 w-60 md:w-64 rounded shadow-md hover:shadow-purple-100 hover:shadow-lg flex p-2 flex-col items-center">
        {renderImage()}
        
        <H2>{title}</H2>
        
        <ul className='flex flex-1 w-full flex-col px-1 mt-4'>
          <li id='groom' aria-label='Last grooming' role='img' className='flex items-center border-b-[1px] border-purple-50 mb-2 text-sm'>
            Last grooming: <span className='text-md ml-1' aria-labelledby='groom' role='status'>12/05/2023</span>
          </li>

          <li id='vet' aria-label='Last Vet visist' role='img' className='flex items-center border-b-[1px] border-purple-50 mb-2 text-sm'>
            Last Vet visist: <span className='text-md ml-1' aria-labelledby='vet' role='status'>12/05/2024</span>
          </li>
        </ul>
      </article>
  )
}

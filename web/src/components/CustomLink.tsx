import { ReactNode } from 'react'
import Link from 'next/link'
import { Routes } from '@/components/routes'

interface CustomLinkProps {
  name: string;
  id: string;
  children: ReactNode;
}


function CustomLink ({ name, id, children }: CustomLinkProps) {
  return (
    <Link aria-label={name} title={name} id={id} href={`${Routes.PET_DETAIL}/${id}`}>
      {children}
    </Link>
  )
}

export default CustomLink

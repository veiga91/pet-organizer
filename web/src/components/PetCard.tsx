import {Card} from '@/components/Card'
import Image from 'next/image'
import CustomLink from '@/components/CustomLink'

interface PetCardProps {
  src: string;
  name: string;
  title: string;
  id: string;
}

export default function PetCard({ id, name, title, src }: PetCardProps) {
  return (
    <CustomLink id={id} name={name}>
      <Card
        title={title}
        renderImage={() =>
          <Image width={240} height={320}
          src={src}
          alt={name} className="flex flex-1 max-h-32 md:max-h-36 rounded"
        />
        }
      />
    </CustomLink>
  )
}

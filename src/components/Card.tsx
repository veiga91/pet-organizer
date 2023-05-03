import Image from 'next/image'
import TypoHeaders, { HeaderTags } from './typography/TypoHeaders'
import { Button, ButtonVariant } from './Button'


interface CardProps {
  name: string
}

function Card ({ name }: CardProps) {

  return (
    <article className="bg-white h-72 md:h-80 w-60 md:w-64 rounded drop-shadow-md flex p-2 flex-col">
      <Image width={240} height={320}
        src='https://picsum.photos/240/320'
        alt={name} className="flex flex-1 max-h-32 md:max-h-36 rounded"
      />
      <TypoHeaders headertag={HeaderTags.H4}>{name}</TypoHeaders>

      <Button>Open Detail</Button>
    </article>
  )
}

export default Card

import PetCard from '@/components/PetCard'

export default function Dashboard() {
  return (
    <main>
      <div className='flex flex-1 justify-center md:justify-start px-4 gap-4 flex-wrap'>
        <PetCard id='125' title='My Dog' name='My Dog' src='https://picsum.photos/240/320' />
      </div>
    </main>
  )
}

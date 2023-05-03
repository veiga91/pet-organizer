import Card from '../components/Card'

export default function Home() {
  return (
    <main>
     <div className='flex flex-1 justify-center sm:justify-start px-4'>
        <Card name='My Cat' />
      </div>
    </main>
  )
}

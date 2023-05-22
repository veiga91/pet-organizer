import Card from '../../components/Card'

export default function Dashboard() {
  return (
    <main>
      <div className='flex flex-1 justify-center md:justify-start px-4 gap-4 flex-wrap'>
        <Card id='125' name='My Dog' />
        <Card id='125' name='My Dog' />
        <Card id='125' name='My Dog' />
        <Card id='125' name='My Dog' />
      </div>
    </main>
  )
}

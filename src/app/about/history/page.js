'use client'
import Aboutus from '@/components/ui/Aboutus'

function History() {

return (
  <div>
    <Aboutus />
    <div className='Company-timeline'>
      <div className='History-timetext w-[80%] m-auto mb-10 flex flex-col items-center'>
        <h1 className='text-4xl'>Company History Timeline</h1>
        <h1 className='text-4xl text-orange-600'>All our dreams can come true,</h1>
        <h1 className='text-4xl text-orange-600'> if we have the courage to pursue them.</h1>
      </div>
      <div className='History-timeline w-[80%] m-auto'>

      </div>
    </div>
  </div>
)
}

export default History
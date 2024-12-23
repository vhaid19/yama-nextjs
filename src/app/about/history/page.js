'use client'
import { useState, useEffect } from 'react'; 
import Aboutus from '@/components/ui/Aboutus'

function History() {

  const [Year, setYear] = useState(2000);

  const updateyear = ()=>{
    setYear(Year + 1);
  }
  useEffect(() => {
    updateyear();
  }, [])

// const Timeline = [
//   {
//     'information': 'lorem ipsum dolor sit amet',
//     'img' : Images,
//   }
// ]

return (
  <div>
    <Aboutus />
    <div className='Company-timeline'>
      <div className='History-timetext w-[80%] m-auto mb-10'>
        <h1 className='text-4xl'>Company History Timeline</h1>
        <h1 className='text-4xl w-[50%] text-orange-600'>All our dreams can come true, if we have the courage to pursue them.</h1>
      </div>
      <div className='container mx-auto py-12'>
        <div className="flex justify-between pr-24">

          {/* Timeline Item 1 */}
          <div className="flex flex-row items-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-orange-600 mb-4 animate-bounce">
                2020
              </div>
              <div className="h-24 bg-orange-600 w-1"></div>
              <div className="max-w-md text-center px-6 py-4 bg-white shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <img
                src="/image1.jpg"
                alt="2020 Event"
                className="w-64 h-48 mt-4 rounded-lg shadow-xl object-cover animate-pulse"
              />
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="flex flex-row items-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-orange-600 mb-4 animate-bounce">
                2021
              </div>
              <div className="h-24 bg-orange-600 w-1"></div>
              <div className="max-w-md text-center px-6 py-4 bg-white shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
                <p className="text-gray-700">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <img
                src="/image2.jpg"
                alt="2021 Event"
                className="w-64 h-48 mt-4 rounded-lg shadow-xl object-cover animate-pulse"
              />
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="flex flex-row items-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-orange-600 mb-4 animate-bounce">
                2022
              </div>
              <div className="h-24 bg-orange-600 w-1"></div>
              <div className="max-w-md text-center px-6 py-4 bg-white shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
                <p className="text-gray-700">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <img
                src="/image3.jpg"
                alt="2022 Event"
                className="w-64 h-48 mt-4 rounded-lg shadow-xl object-cover animate-pulse"
              />
            </div>
          </div>
        </div>
        {Year}
      </div>
    </div>
  </div>
)
}

export default History
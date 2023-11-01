import { useState } from 'react'

function Forecast() {
    const [viewMore, setViewMore] = useState(false)
    const [show, setShow] = useState(true)

  return (
    <>
    <div className='flex items-center justify-start mt-6'>
        <p className='text-white font-medium uppercase'>Daily Forecast</p>
    </div>
    <hr className='my-2'/>

    <div className='flex flex-col'>
    <div className='flex flex-row items-center justify-between text-white'>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-sm font-light'>Monday</p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="sun" className='w-12 my-1'/>
            <p className='font-medium'>28</p>
            <p className='font-medium'>Sunny</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <p className='text-sm font-light'>Monday</p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="sun" className='w-12 my-1'/>
            <p className='font-medium'>28</p>
            <p className='font-medium'>Sunny</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <p className='text-sm font-light'>Monday</p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="sun" className='w-12 my-1'/>
            <p className='font-medium'>28</p>
            <p className='font-medium'>Sunny</p>
        </div>

    </div>

    {show && 
    <button 
        className='bg-transparent hover:bg-blue-500 text-slate-100 font-semibold hover:text-white py-2 px-4 border border-slate-100 hover:border-transparent rounded-full my-3'
        onClick={() => 
            {
                setViewMore(true)
                setShow(false)
            }
        }>
        View More
    </button>
    }

    {viewMore && 
    <div className='flex flex-row items-center justify-between text-white my-3'>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-sm font-light'>Monday</p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="sun" className='w-12 my-1'/>
            <p className='font-medium'>28</p>
            <p className='font-medium'>Sunny</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <p className='text-sm font-light'>Monday</p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="sun" className='w-12 my-1'/>
            <p className='font-medium'>28</p>
            <p className='font-medium'>Sunny</p>
        </div>

        <div className='flex flex-col items-center justify-center'>
            <p className='text-sm font-light'>Monday</p>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="sun" className='w-12 my-1'/>
            <p className='font-medium'>28</p>
            <p className='font-medium'>Sunny</p>
        </div>
        
    </div>
    }
    </div>

   
    </>
  )
}

export default Forecast
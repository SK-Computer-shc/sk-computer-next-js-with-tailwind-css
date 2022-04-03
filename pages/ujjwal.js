import React from 'react'
import Image from 'next/image'

const ujjwal = () => {
    return (
        <div>
            <div className='text-2xl text-center mt-16 bg-red-400'>
                Kaahey la aise krta hai be zindgi se pareshan hai ka
            </div>
            <div className='flex w-full h-full'>
                <div><Image className='rounded-r-full' src='/ujjwal.jpg' width={200} height={200} alt="ujjwal ka photo" /></div>
                <div className='absolute right-1'><Image className='z-10' src='/mukka.gif' width={200} height={200} alt='mukka lgega'/></div>
            </div>
        </div>
    )
}

export default ujjwal
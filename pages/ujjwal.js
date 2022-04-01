import React from 'react'
import Image from 'next/image'

const ujjwal = () => {
    return (
        <div>
            <div className='text-2xl text-center mt-16 bg-red-400'>
                Kaahey la aise krta hai be zindgi se pareshan hai ka
            </div>
            <div>
                <Image className='rounded-r-full absolute' src='/ujjwal.jpg' width={200} height={200} alt="ujjwal ka photo" />
            </div>
        </div>
    )
}

export default ujjwal
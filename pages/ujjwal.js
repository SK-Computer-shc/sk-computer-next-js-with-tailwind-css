import React from 'react'
import Image from 'next/image'

const ujjwal = () => {
    return (
        <div>
            <div className='text-2xl text-center mt-16 bg-red-400'>
                <marquee behavior="scroll" direction="left" height="" width="100%"> <h4> Kaahey la aise krta hai be zindgi se pareshan hai ka</h4></marquee>
            </div>
            <div className='flex w-full h-full justify-between'>
                <div className='flex'>
                <div><Image className='rounded-r-full' src='/ujjwal.jpg' width={200} height={200} alt="ujjwal ka photo" /></div>
                <div className='right-1'><marquee behavior="scroll" direction="left" height="" width="100%"><Image className='z-10' src='/mukka.gif' width={200} height={200} alt='mukka lgega'/></marquee></div>
                </div>
            <div>
                <marquee className="bg-zinc-100 text-orange-500 p-4 rounded-3xl shadow-xl items-center text-lg" behavior="scroll" direction="up" height="200px" scrollamount="1" >Abse उलुल  julool type kiya to patak ke pran nikaal denge</marquee>
            </div>
            </div>
        </div>
    )
}

export default ujjwal
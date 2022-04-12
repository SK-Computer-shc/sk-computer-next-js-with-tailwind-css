import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'


const header = () => {
    const toggleCart = () => {
        if (ref.current.classList.contains('hidden')) {
            ref.current.classList.remove('hidden')
            ref.current.classList.add('block')
        }
        else if (!ref.current.classList.contains('hidden')) {
            ref.current.classList.remove('block')
            ref.current.classList.add('hidden')
        }     

    }
    const ref = useRef()
    return (
        <div className='sticky top-0 z-50 bg-slate-50'>
            <nav className="flex flex-col justify-between items-center md:flex-row text-slate-800 border-2 drop-shadow-lg rounded-2xl">
                <Link href="/"><a className="mx-4" ><Image className="border-2 rounded-xl" src="/sk-computer-logo.jpg" alt="Logo sk-computer saharsa" width={45} height={45} /></a></Link>


                <ul ref={ref} className="hidden md:flex" id="navmenu">
                    <li className="p-6"> <Link href='/' ><a
                        className="p-2 rounded-xl cursor-pointer shadow-md bg-slate-50 hover:bg-slate-100 hover:drop-shadow-lg"
                        title="Home">Home</a></Link></li>
                    <li className="p-6"><Link href='/contact'><a
                        className="p-2 rounded-xl cursor-pointer shadow-md bg-slate-50 hover:bg-slate-100 hover:drop-shadow-lg"
                        title="Contact US">Contact</a></Link></li>
                    <li className="p-6"><Link href='/about'><a
                        className="p-2 rounded-xl cursor-pointer shadow-md bg-slate-50 hover:bg-slate-100 hover:drop-shadow-lg"
                        title="About SK Computer">About Us</a></Link></li>
                    <li className="p-6"><Link href='/services' ><a
                        className="p-2 rounded-xl cursor-pointer shadow-md bg-slate-50 hover:bg-slate-100 hover:drop-shadow-lg"
                        title="Services offered">Services</a></Link></li>
                </ul>
                <a href="#" onClick={toggleCart} className="md:hidden absolute right-6 top-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                </a>
            </nav>

        </div>
    )
}

export default header
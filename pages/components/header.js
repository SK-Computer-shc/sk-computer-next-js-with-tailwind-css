import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { AiOutlineShoppingCart, AiFillCloseSquare, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { BsFillBagCheckFill } from "react-icons/Bs";
import { MdOutlineRemoveShoppingCart } from 'react-icons/Md'


const header = () => {

    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }

    }
    const ref=useRef();

    return (
        <>
            <div className='sticky top-0 z-40'>
                <nav className=" flex bg-slate-50 flex-col justify-between items-center md:flex-row text-slate-800 border-2 drop-shadow-lg rounded-2xl">
                    <Link href="/"><a className="mx-4" ><Image className="border-2 border-zinc-900 rounded-xl" src="/sk-computer-logo.jpg" alt="Logo sk-computer saharsa" width={45} height={45} /></a></Link>


                    <ul className="flex flex-wrap md:mr-10" id="navmenu">
                        <li className="md:m-6 m-3 "> <Link href='/' ><a
                            className="p-2 rounded-xl cursor-pointer shadow-md bg-slate-50 hover:bg-slate-100 hover:drop-shadow-lg"
                            title="Home">Home</a></Link></li>
                        <li className="md:m-6 m-3 "><Link href='/contact'><a
                            className="p-2 rounded-xl cursor-pointer shadow-md bg-slate-50 hover:bg-slate-100 hover:drop-shadow-lg"
                            title="Contact US">Contact</a></Link></li>
                        <li className="md:m-6 m-3 "><Link href='/about'><a
                            className="p-2 rounded-xl cursor-pointer shadow-md bg-slate-50 hover:bg-slate-100 hover:drop-shadow-lg"
                            title="About SK Computer">About Us</a></Link></li>
                        <li className="md:m-6 m-3 "><Link href='/services' ><a
                            className="p-2 rounded-xl cursor-pointer shadow-md bg-slate-50 hover:bg-slate-100 hover:drop-shadow-lg"
                            title="Services offered">Services</a></Link></li>
                    </ul>
                    <a href="#" className="md:hidden absolute left-6 top-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </a>
                </nav>

            </div>
            <div onClick={toggleCart} className='z-50 absolute right-6 top-4 cursor-pointer text-3xl md:right-3 md:top-5 md:text-3xl'>
                <a title='Your Shopping cart' className=''><AiOutlineShoppingCart /></a>
            </div>
            <div ref={ref} className='absolute w-72 top-0 right-0 z-50 h-full bg-orange-200 p-10 transform transition-transform translate-x-full'>
                <h2 className='text-lg'>Your Shopping Cart</h2>
                <span onClick={toggleCart} className='cursor-pointer absolute top-3 right-2 text-3xl'><AiFillCloseSquare /></span>
                <ol className='list-decimal'>

                    <li>
                        <div className='flex'>
                            <div className='w-2/3 font-semibold'>Printer</div>
                            <div className='w-1/3 flex justify-center font-semibold'><AiFillMinusCircle className='m-1 text-xl' /> 1 <AiFillPlusCircle className='m-1 text-xl' /></div>
                        </div>
                    </li>
                    <li>
                        <div className='flex'>
                            <div className='w-2/3 font-semibold'>Printer</div>
                            <div className='w-1/3 flex justify-center font-semibold'><AiFillMinusCircle className='m-1 text-xl' /> 1 <AiFillPlusCircle className='m-1 text-xl' /></div>
                        </div>
                    </li>
                    <li>
                        <div className='flex'>
                            <div className='w-2/3 font-semibold'>Printer</div>
                            <div className='w-1/3 flex justify-center font-semibold'><AiFillMinusCircle className='m-1 text-xl' /> 1 <AiFillPlusCircle className='m-1 text-xl' /></div>
                        </div>
                    </li>
                    <li>
                        <div className='flex'>
                            <div className='w-2/3 font-semibold'>Printer</div>
                            <div className='w-1/3 flex justify-center font-semibold'><AiFillMinusCircle className='m-1 text-xl' /> 1 <AiFillPlusCircle className='m-1 text-xl' /></div>
                        </div>
                    </li>
                    <li>
                        <div className='flex'>
                            <div className='w-2/3 font-semibold'>Printer</div>
                            <div className='w-1/3 flex justify-center font-semibold'><AiFillMinusCircle className='m-1 text-xl' /> 1 <AiFillPlusCircle className='m-1 text-xl' /></div>
                        </div>
                    </li>
                </ol>
                <div className='flex justify-center'>
                    <button className="flex mt-6 text-white bg-orange-600 border-0 py-2 px-3 focus:outline-none hover:bg-orange-700 rounded"> <BsFillBagCheckFill className='m-1' />Checkout</button>
                    <button className="flex mx-2 mt-6 text-white bg-orange-600 border-0 py-2 px-3 focus:outline-none hover:bg-orange-700 rounded"> <MdOutlineRemoveShoppingCart className='m-1' />ClearCart</button>
                </div>
            </div >
        </>
    )
}

export default header
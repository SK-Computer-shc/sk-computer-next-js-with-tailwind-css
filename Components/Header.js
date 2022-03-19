import React from 'react'
import Link from 'next/link'


const Header = () => {
    return (
        <div>
            <nav className="flex flex-col justify-between items-center md:flex-row text-slate-800 border-2 drop-shadow-lg rounded-2xl">
                <Link id="navlogo1" href="/"><img src="/sk-computer-logo.jpg" title="SK Computer Saharsa"
                    className="cursor-pointer w-10 h-10 mx-2 my-4 border-2 rounded-xl shadow-sm hover:drop-shadow-lg"
                    alt="logo SK Computer saharsa-Bihar" />
                </Link>

                {/* navbar ka responsiveness fix krna hai Responsive nhi hai */}
                <ul className=" flex flex-wrap" id="navmenu">
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
                <a href="#" className="md:hidden absolute right-6 top-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                </a>
            </nav>

        </div>
    )
}

export default Header
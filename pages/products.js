import React from 'react'
import Link from 'next/link'

const Products = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-6 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <Link href='/product/product1'><a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://4.imimg.com/data4/BI/MX/MY-5174293/laserjet-m1005-printer-1000x1000.jpg" />
                            </a></Link>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">PRINTER</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">HP Laserjet m1005</h2>
                                <p className="mt-1">₹23000.00</p>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <Link href='/product/product2'><a className="block relative h-48 rounded overflow-hidden">
                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://images.unsplash.com/photo-1544099858-75feeb57f01b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                            </a></Link>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">USED LAPTOP</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Samsung NP300E5X-A03NG </h2>
                                <p className="mt-1">₹9999.00</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section >
        </div >
    )
}

export default Products
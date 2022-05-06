import React from 'react'

const Order = () => {
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">SK Computer &#38; Printers</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order ID: 852106</h1>
                            <p>Your Order is Placed Successfully</p>
                            <div className="flex text-center justify- mb-4">
                                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Items</a>
                                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Quatity</a>
                                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Amount</a>
                            </div>
                            <p className="leading-relaxed mb-4"></p>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Printer Services</span>
                                <span className="text-gray-500 ml-auto">1</span>
                                <span className="ml-auto text-gray-900">399.00</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Printer Services</span>
                                <span className="text-gray-500 ml-auto">1</span>
                                <span className="ml-auto text-gray-900">399.00</span>
                            </div>
                            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                <span className="text-gray-500">Printer Services</span>
                                <span className="text-gray-500 ml-auto">1</span>
                                <span className="ml-auto text-gray-900">399.00</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="title-font font-medium text-2xl text-gray-900 mb-6">Subtotal= ₹1197.00</span>
                                <button className="text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-700 rounded">Track Order</button>
                               
                            </div>
                        </div>
                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Order